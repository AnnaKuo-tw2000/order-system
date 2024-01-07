<script setup>
import { Plus } from '@element-plus/icons-vue';
import * as firebaseSto from "firebase/storage";
import * as firebaseDb from "firebase/database";
import * as firebaseAuth from "firebase/auth";

const auth = firebaseAuth.getAuth();
const storage = firebaseSto.getStorage();
const db = firebaseDb.getDatabase();

// 上傳列表
const foodTitle = ref('');
const foodPrice = ref('');
const fileList = ref([]);

// 放大鏡預覽圖片
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url;
    dialogVisible.value = true;
};

// 上傳到訂餐列表
function uploadToFoodList() {
    // 上傳的圖片陣列中的第一個
    const targetFile = fileList.value[0].raw;
    // 儲存路徑
    const fileRef = firebaseSto.ref(storage, `food-images/${targetFile.name}`);
    // console.log(fileList.value);
    // 上傳圖片
    firebaseSto.uploadBytes(fileRef, targetFile)
        // 取得上傳圖片的URL
        .then(() => {
            firebaseSto.getDownloadURL(fileRef)
                // 在 Realtime Database 中儲存食物相關資訊
                .then((imgUrl) => {
                    console.log('imgUrl', imgUrl);
                    const timestamp = Date.now();
                    firebaseDb.set(firebaseDb.ref(db, `foodInfo/${timestamp}`), {
                        title: foodTitle.value,
                        price: foodPrice.value,
                        imageUrl: imgUrl,
                        uid: timestamp
                    }).then(() => {
                        getFoodList();
                        foodTitle.value = '';
                        foodPrice.value = null;
                        fileList.value = [];
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
}

// 訂餐列表
const foodList = ref([]);
// 取得商品資訊放入訂餐列表中
function getFoodList() {
    firebaseDb.get(firebaseDb.ref(db, "foodInfo"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                // 是商品的物件
                foodList.value = snapshot.val();
                console.log(foodList.value);
            }
        }).catch((error) => {
            console.error(error);
        });
}
getFoodList();

// 提示框
const open_loginAlertDialog = ref(false);

function addToShoppingCart() {
    firebaseAuth.onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('有人登錄');
        } else {
            open_loginAlertDialog.value = true;
        }
    });
}
</script>

<template>
    <div class="bg-[url('/img/bg.jpg')]  p-12 flex justify-center gap-10 text-amber-950 w-full">
        <!-- <div class="w-1/5">
            <div class="text-3xl leading-[3] text-center">線上訂購美食</div>
            <ul class="text-xl">
                <li class="border-b border-black leading-loose hover:bg-amber-950  hover:text-white cursor-pointer">全部(23)
                </li>
                <li class="border-b border-black leading-loose  hover:bg-amber-950  hover:text-white cursor-pointer">
                    只愛吃薯條(18)</li>
                <li class="border-b border-black leading-loose  hover:bg-amber-950  hover:text-white cursor-pointer">
                    加熱就可食(1)</li>
                <li class="border-b border-black leading-loose  hover:bg-amber-950  hover:text-white cursor-pointer">
                    不敢漢堡系列(4)</li>
            </ul>
        </div> -->

        <!-- 管理員操作訂餐列表 -->
        <section class="w-1/5 shadow-lg p-3">
            <div class="text-3xl mb-5 text-center">管理員操作列表</div>
            <div class="w-full">
                <div>商品名稱：<el-input v-model="foodTitle" class="w-50 m-2" size="small" />
                </div>
                <div>商品價格：<el-input v-model="foodPrice" class="w-50 m-2" size="small" />
                </div>
                <div class="flex gap-3  mt-2 flex-wrap">
                    <p>圖片:</p>
                    <el-upload v-model:file-list="fileList" :on-preview="handlePreview" action="#" list-type="picture-card"
                        :auto-upload="false" class="text-center">
                        <el-icon class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                        <el-dialog v-model="dialogVisible">
                            <img w-full :src="dialogImageUrl" alt="Preview Image" />
                        </el-dialog>
                    </el-upload>
                    <el-button round class="self-end" @click="uploadToFoodList">新增</el-button>

                </div>
            </div>
        </section>

        <!-- 訂餐列表 -->
        <section class="flex flex-col gap-10 w-[70%]">
            <h1 class="text-3xl text-center">
                訂餐列表
            </h1>
            <div class="flex flex-wrap px-2 w-full gap-6">
                <div v-for="food in foodList" :key="food.uid"
                    class="flex flex-col w-[250px] h-[300px]  items-center shadow-lg text-center">
                    <img :src="food.imageUrl" alt="" class="mb-5 w-[100px] h-[100px] object-cover">
                    <div class="text-2xl leading-loose font-semibold">{{ food.title }}</div>
                    <div class=" w-24 border-b border-black mb-3"></div>
                    <div class="text-xl font-semibold mb-1">${{ food.price }}</div>
                    <el-button class="w-[90%] mt-5" @click="addToShoppingCart">加入購物車</el-button>
                </div>
            </div>
        </section>

        <!-- 沒登入就加入購物車的alert -->
        <el-dialog v-model="open_loginAlertDialog" title="請登入" width="40%">
            <span>
                要登入才能存取購物車資料喔
            </span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="open_loginAlertDialog = false">取消</el-button>
                    <el-button type="primary" @click="navigateTo('auth/login')">
                        登入
                    </el-button>
                </span>
            </template>
        </el-dialog>

    </div>
</template>

<style lang="scss" scoped>
:deep() {
    .el-input {
        width: 70%;
    }
}
</style>
