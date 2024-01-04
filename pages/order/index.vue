<script setup>
import * as firebaseDb from "firebase/database";
import * as firebaseSto from "firebase/storage";
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const db = firebaseDb.getDatabase();
const storage = firebaseSto.getStorage();
const authStore = useAuthStore();

// 新增/更改食物列表
const foodTitle = ref('');
const foodPrice = ref(null);
const fileList = ref([]);
// 資料格式範例
// const fileList = ref([{
//     name: 'food.jpeg',
//     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
// }]);
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url;
    dialogVisible.value = true;
};
const uploadToFoodList = () => {
    // 上傳圖片
    console.log('fileList.value[0]', fileList.value[0]);
    const targetFile = fileList.value[0].raw;
    const fileRef = firebaseSto.ref(storage, `food-images/${targetFile.name}`);
    firebaseSto.uploadBytes(fileRef, targetFile, { contentType: targetFile.type }).then(() => {
        firebaseSto.getDownloadURL(fileRef).then((imgUrl) => {
            const timestamp = Date.now();
            firebaseDb.set(firebaseDb.ref(db, `foodInfo/${timestamp}`), {
                title: foodTitle.value,
                price: foodPrice.value,
                imageUrl: imgUrl,
                uid: timestamp
            }).then(() => {
                getFoodList();
            });
            foodTitle.value = '';
            foodPrice.value = null;
            fileList.value = [];
        }).catch((err) => {
            alert(err);
        });
    });
};

// 食物列表相關
const foodList = ref([]);
function getFoodList() {
    firebaseDb.get(firebaseDb.ref(db, "foodInfo"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                foodList.value = Object.values(data);
            } else {
                foodList.value = null;
                console.log('no data');
            }
        });
}
getFoodList();

// 購物車相關
const cartStore = useCartStore();
const open_loginAlertDialog = ref(false);
function addToShoppingCart(cartItem) {
    if (authStore.userInfo?.uid) {
        let num = 1;
        if (cartStore.cartList) {
            const targetItem = cartStore.cartList.find((item) => item.uid === cartItem.uid);
            if (targetItem) num = targetItem.num + 1;
        }
        firebaseDb.set(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${cartItem.uid}`), {
            ...cartItem,
            num
        });
    } else {
        open_loginAlertDialog.value = true;
    }
}
function updateShoppingCart(val, cartItem) {
    firebaseDb.update(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${cartItem.uid}`), { num: val });
}
function deleteFromShoppingCart(cartItem) {
    firebaseDb.remove(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${cartItem.uid}`));
}
</script>

<template>
    <div class="flex flex-wrap">
        <!-- 管理員操作訂餐列表 -->
        <section class="mb-8 ml-5 border-2 p-3 w-fit">
            <h2 class="text-lg font-bold">操作訂餐列表</h2>
            <div class="flex gap-5">
                <div>
                    <div>標題：<el-input v-model="foodTitle" placeholder="Please input" /></div>
                    <div>價格：<el-input v-model="foodPrice" placeholder="Please input" /></div>
                </div>
                <div>
                    <div>圖片：</div>
                    <el-upload v-model:file-list="fileList" action="#" list-type="picture-card"
                        :on-preview="handlePictureCardPreview" :auto-upload="false" :class="{ hide: fileList.length > 0 }">
                        <font-awesome-icon :icon="['fas', 'plus']" />
                    </el-upload>
                </div>
            </div>
            <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
            <el-button @click="uploadToFoodList">上傳並新增</el-button>
        </section>

        <!-- 訂餐列表 -->
        <section class="mb-8 ml-5 border-2 p-3 w-fit">
            <h2 class="text-lg font-bold">訂餐列表</h2>
            <div v-for="food in foodList" :key="food.uid" class="mb-3">
                <img :src="food.imageUrl" alt="" style="width: 50px;height: 50px">
                <div>品項：{{ food.title }}</div>
                <div>價格：{{ food.price }}</div>
                <el-button @click="addToShoppingCart(food)">加入購物車</el-button>
            </div>
        </section>

        <!-- 購物車 -->
        <section class="mb-8 ml-5 border-2 p-3 w-fit">
            <h2 class="text-lg font-bold">購物車(總價：{{ cartStore.cartSum }})</h2>
            <div v-for="cardItem in cartStore.cartList" :key="cardItem.uid" class="mb-3">
                <img :src="cardItem.imageUrl" alt="" style="width: 50px;height: 50px">
                <div>品項：{{ cardItem.title }}</div>
                <div>價格：{{ cardItem.price }}</div>
                <div>數量：<el-input-number :model-value="cardItem.num" :min="1" size="small"
                        @change="updateShoppingCart($event, cardItem)" />
                </div>
                <el-button @click="deleteFromShoppingCart(cardItem)">刪除品項</el-button>
            </div>
            <el-dialog v-model="open_loginAlertDialog" title="請登入" width="40%">
                <span>
                    要登入才能存取購物車資料喔
                </span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="open_loginAlertDialog = false">取消</el-button>
                        <el-button type="primary" @click="navigateTo('/auth/login')">
                            登入
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </section>
    </div>
</template>

<style lang="scss" scoped>
:deep() {

    div.el-upload--picture-card,
    ul.el-upload-list--picture-card .el-upload-list__item {
        width: 100px;
        height: 100px;
    }

    // 不需要多張圖片上傳，所以上傳一張圖片後，將上傳欄位隱藏起來
    .hide {
        div.el-upload.el-upload--picture-card {
            display: none;
        }
    }
}
</style>
