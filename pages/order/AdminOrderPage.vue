<script setup>
import { Plus } from '@element-plus/icons-vue';
import * as firebaseSto from "firebase/storage";
import * as firebaseDb from "firebase/database";
import { useAuthStore } from '@/stores/auth';

const storage = firebaseSto.getStorage();
const db = firebaseDb.getDatabase();
const authStore = useAuthStore();
// 上傳列表
const foodTitle = ref('');
const foodPrice = ref('');
const fileList = ref([]);
const FoodCategory = ref('');

// 放大鏡預覽圖片
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url;
    dialogVisible.value = true;
};
const editDialogImageUrl = ref('');
const editDialogVisible = ref(false);
const handleEditPreview = (uploadFile) => {
    editDialogImageUrl.value = uploadFile.url;
    editDialogVisible.value = true;
};

// 上傳到訂餐列表
const errMsg = ref('');
function uploadToFoodList() {
    // 上傳的圖片陣列中的第一個
    const targetFile = fileList.value[0].raw;
    // 儲存路徑
    const fileRef = firebaseSto.ref(storage, `food-images/${targetFile.name}`);
    // 上傳圖片
    firebaseSto.uploadBytes(fileRef, targetFile)
        // 取得上傳圖片的URL
        .then(() => {
            firebaseSto.getDownloadURL(fileRef)
                // 在 Realtime Database 中儲存食物相關資訊
                .then((imgUrl) => {
                    const timestamp = Date.now();
                    firebaseDb.set(firebaseDb.ref(db, `foodInfo/${timestamp}`), {
                        title: foodTitle.value,
                        price: foodPrice.value,
                        type: FoodCategory.value,
                        imageUrl: imgUrl,
                        imageName: targetFile.name,
                        uid: timestamp,
                    }).then(() => {
                        getFoodList();
                        foodTitle.value = '';
                        foodPrice.value = null;
                        FoodCategory.value = '';
                        fileList.value = [];
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => {
            console.log(err);
            if (err.code === 'storage/unauthorized') {
                errMsg.value = '非管理員無法使用該頁面,一般用戶請至訂購頁訂餐';
                ElMessage.error(errMsg.value);
                navigateTo({ name: 'order-UserOrderPage' });
            }
        });
}

// 訂餐列表
const foodList = ref([]);
// 取得商品資訊放入訂餐列表中
function getFoodList() {
    firebaseDb.get(firebaseDb.ref(db, "foodInfo"))
        .then((snapshot) => {
            // 是商品的物件
            foodList.value = snapshot.val();
        }).catch((error) => {
            console.error(error);
        });
}
getFoodList();

// 編輯框
const EditDialog = ref(false);
const editFoodTitle = ref('');
const editFoodPrice = ref('');
const editFileList = ref([]);
const editFoodCategory = ref('');
// 編輯商品

let selectedFoodSnapshot = null;
function editFood(selectedFood) {
    // 在編輯時保存 selectedFood的snapshot
    selectedFoodSnapshot = selectedFood;
    editFoodTitle.value = selectedFood.title;
    editFoodPrice.value = selectedFood.price;
    editFoodCategory.value = selectedFood.type;
    editFileList.value = [
        {
            url: selectedFood.imageUrl,
            imageName: selectedFood.imageName
        }
    ];
    console.log(editFileList.value, selectedFood);
    console.log(foodList.value);
    EditDialog.value = true;
}

const isUpdateDisabled = computed(() => editFoodTitle.value === selectedFoodSnapshot.title
    && editFoodPrice.value === selectedFoodSnapshot.price && editFileList.value[0].imageName === selectedFoodSnapshot.imageName);

// 更新商品資訊
function updateFoodInfo() {
    // 判斷圖片是否變更
    if (selectedFoodSnapshot.imageUrl !== editFileList.value[0].url) {
        // 拿到新圖片的文件本體
        const newImageFile = editFileList.value[0].raw;
        const newImageRef = firebaseSto.ref(storage, `food-images/${newImageFile.name}`);
        firebaseSto.uploadBytes(newImageRef, newImageFile).then(() => {
            firebaseSto.getDownloadURL(newImageRef).then((imgUrl) => {
                firebaseDb.update(firebaseDb.ref(db, `foodInfo/${selectedFoodSnapshot.uid}`), {
                    title: editFoodTitle.value,
                    price: editFoodPrice.value,
                    type: editFoodCategory.value,
                    imageName: newImageFile.name,
                    imageUrl: imgUrl
                }).then(() => {
                    // 更新畫面的訂餐列表
                    getFoodList();
                    firebaseSto.deleteObject(firebaseSto.ref(storage, `food-images/${selectedFoodSnapshot.name}`));
                });
            });
        });
    } else {
        firebaseDb.update(firebaseDb.ref(db, `foodInfo/${selectedFoodSnapshot.uid}`), {
            title: editFoodTitle.value,
            price: editFoodPrice.value,
            type: editFoodCategory.value
        }).then(() => {
            // 更新畫面的訂餐列表
            getFoodList();
        });
    }
    EditDialog.value = false;
}

// 刪除商品
function deleteFoodInfo(selectedFood) {
    firebaseDb.remove(firebaseDb.ref(db, `foodInfo/${selectedFood.uid}`)).then(() => {
        getFoodList();
        console.log(111);
    }).then(() => { firebaseDb.remove(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${selectedFood.uid}`)); });
}

</script>

<template>
    <div class="bg-[url('/img/bg-1.jpg')]  p-12 flex justify-center gap-10 text-amber-950 w-full">

        <!-- 管理員操作訂餐列表 -->
        <section class="w-1/5 shadow-lg p-3">
            <div class="text-3xl mb-5 text-center">管理員操作列表</div>
            <div class="w-full">
                <div>商品名稱：<el-input v-model="foodTitle" class="w-50 m-2" size="small" />
                </div>
                <div>商品價格：<el-input v-model="foodPrice" class="w-50 m-2" size="small" />
                </div>
                <div>商品類別：<el-input v-model="FoodCategory" class="w-50 m-2" size="small" />
                </div>
                <div class="flex gap-3  mt-2 flex-wrap">
                    <p>圖片:</p>
                    <el-upload v-model:file-list="fileList" :on-preview="handlePreview" action="#" list-type="picture-card"
                        :auto-upload="false" class="text-center" :class="{ hide: fileList.length > 0 }">
                        <el-icon class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img w-full :src="dialogImageUrl" alt="Preview Image" />
                    </el-dialog>
                    <el-button round class="self-end" @click="uploadToFoodList">上傳</el-button>

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
                    <div class='flex mt-5'>
                        <el-button @click="editFood(food)">編輯</el-button>
                        <el-button @click="deleteFoodInfo(food)">刪除</el-button>
                    </div>
                    <!-- 編輯框 -->
                    <el-dialog v-model="EditDialog" title="商品編輯" width="40%">
                        <span>
                            <div>商品名稱：<el-input v-model="editFoodTitle" class="w-50 m-2" size="small" />
                            </div>
                            <div>商品價格：<el-input v-model="editFoodPrice" class="w-50 m-2" size="small" />
                            </div>
                            <div>商品類別：<el-input v-model="editFoodCategory" class="w-50 m-2" size="small" />
                            </div>
                            <div class="flex gap-3 mt-2">
                                <p>圖片:</p>
                                <el-upload v-model:file-list="editFileList" :on-preview="handleEditPreview" action="#"
                                    list-type="picture-card" :auto-upload="false" class="text-center"
                                    :class="{ hide: editFileList.length > 0 }">
                                    <el-icon class="avatar-uploader-icon">
                                        <Plus />
                                    </el-icon>
                                </el-upload>
                                <el-dialog v-model="editDialogVisible">
                                    <img w-full :src="editDialogImageUrl" alt="Preview Image" />
                                </el-dialog>
                            </div>
                        </span>
                        <template #footer>
                            <span class="dialog-footer">
                                <el-button @click="EditDialog = false">取消</el-button>
                                <el-button type="primary" @click="updateFoodInfo"
                                    :disabled="isUpdateDisabled">確認</el-button>
                            </span>
                        </template>
                    </el-dialog>

                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
:deep() {
    .el-input {
        width: 70%;
    }
}

.hide {
    div.el-upload.el-upload--picture-card {
        display: none;
    }
}
</style>
