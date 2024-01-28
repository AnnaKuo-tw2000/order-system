<script setup>
import * as firebaseDb from "firebase/database";
import * as firebaseSto from "firebase/storage";
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const db = firebaseDb.getDatabase();
const storage = firebaseSto.getStorage();
const authStore = useAuthStore();

// 區塊一：新增/更改食物列表 ----------------------------------------------------------------
const foodTitle = ref('');
const foodPrice = ref(null);
const fileList = ref([]);
// fileList 的資料格式範例
// const fileList = ref([{
//     name: 'food.jpeg',
//     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
// }]);
let editTargetFood = null;

// 放大鏡預覽圖片
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url;
    dialogVisible.value = true;
};

// 上傳圖片和食物資訊
function uploadToFoodList() {
    // 取得上傳的圖片資源本體
    const targetFile = fileList.value[0].raw;
    // 如果存在，說明這次是第一次新增，或是有更改圖片的編輯
    if (targetFile) {
        // 抓到要上傳到的儲存空間的具體位置的參考
        const fileRef = firebaseSto.ref(storage, `food-images/${targetFile.name}`);
        // 執行上傳 API
        firebaseSto.uploadBytes(fileRef, targetFile, { contentType: targetFile.type }).then(() => {
            // 上傳成功後，執行取得下載URL地址的API(作為img的src，為了呈現圖片)
            firebaseSto.getDownloadURL(fileRef).then((imgUrl) => {
                // 取得下載URL地址成功後，開始設定資料庫
                // 通過確認 editTargetFood 是否存在，來區別這次是新增還是編輯
                // 新增的話，要給新的timestamp；編輯的話，要用舊的timestamp
                const timestamp = editTargetFood?.uid || Date.now();
                firebaseDb.set(firebaseDb.ref(db, `foodInfo/${timestamp}`), {
                    title: foodTitle.value,
                    price: foodPrice.value,
                    imageUrl: imgUrl,
                    imageName: targetFile.name,
                    uid: timestamp
                }).then(() => {
                    // 設定資料庫成功後，重新取得食物列表
                    getFoodList();
                }).then(() => {
                    // 如果這次是編輯，且因為有更改圖片，所有還要從儲存空間中移除舊的圖片
                    if (editTargetFood) {
                        // 執行移除舊的圖片 API
                        firebaseSto.deleteObject(firebaseSto.ref(storage, `food-images/${editTargetFood.imageName}`));
                        // 最後，把暫存的編輯項目重置成空值
                        editTargetFood = null;
                    }
                });
                // 清除操作訂單列表中輸入的資料
                foodTitle.value = '';
                foodPrice.value = null;
                fileList.value = [];
            });
        });
        // 如果不存在，說明這次是沒有更改圖片的編輯
    } else {
        // 因為只動了標題或價格，所以只要發送更新資料庫的 API 就好，不需要操作儲存空間
        firebaseDb.update(firebaseDb.ref(db, `foodInfo/${editTargetFood?.uid}`), {
            title: foodTitle.value,
            price: foodPrice.value,
        }).then(() => {
            // 設定資料庫成功後，重新取得食物列表
            getFoodList();
        });
        // 清除操作訂單列表中輸入的資料
        foodTitle.value = '';
        foodPrice.value = null;
        fileList.value = [];
        editTargetFood = null;
    }
}
function deleteFromFoodList(targetFood) {
    firebaseDb.remove(firebaseDb.ref(db, `foodInfo/${targetFood.uid}`))
        .then(() => {
            getFoodList();
            firebaseDb.get(firebaseDb.ref(db, "userInfo"))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        for (const [userUid, userItem] of Object.entries(snapshot.val())) {
                            const cartList = Object.values(userItem.shoppingCart);
                            cartList.forEach((cartItem) => {
                                if (cartItem.uid === targetFood.uid) {
                                    firebaseDb.remove(firebaseDb.ref(db, `userInfo/${userUid}/shoppingCart/${cartItem.uid}`));
                                }
                            });
                        }
                    }
                }).then(() => {
                    firebaseSto.deleteObject(firebaseSto.ref(storage, `food-images/${targetFood.imageName}`));
                });
        });
}
function editFromFoodList(targetFood) {
    // 將編輯項目暫存起來，供之後執行上傳函式 uploadToFoodList 時取用
    editTargetFood = targetFood;
    // 帶入既有的資料到操作訂單列表
    foodTitle.value = targetFood.title;
    foodPrice.value = targetFood.price;
    fileList.value = [{
        name: targetFood.imageName,
        url: targetFood.imageUrl,
    }];
}

// 區塊二：食物列表相關 ----------------------------------------------------------------
const foodList = ref([]);
function getFoodList() {
    firebaseDb.get(firebaseDb.ref(db, "foodInfo"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                foodList.value = Object.values(data);
            } else {
                foodList.value = null;
            }
        });
}
getFoodList();

// 區塊三：購物車相關 ----------------------------------------------------------------
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
                <el-button @click="editFromFoodList(food)">編輯項目</el-button>
                <el-button @click="deleteFromFoodList(food)">刪除項目</el-button>
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
                        <el-button type="primary" @click="navigateTo('/example/auth/login')">
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
