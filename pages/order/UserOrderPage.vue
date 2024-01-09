<script setup>
// import { useAuthStore } from '@/stores/auth';

// const authStore = useAuthStore();
import * as firebaseDb from "firebase/database";
import * as firebaseAuth from "firebase/auth";

const auth = firebaseAuth.getAuth();
const db = firebaseDb.getDatabase();

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
// 添加至購物車
const cartStore = useCartStore();
function addToShoppingCart(food) {
    firebaseAuth.onAuthStateChanged(auth, (user) => {
        // 如果有人登錄才能加入購物車
        let num = 1;
        if (user.uid) {
            if (cartStore.cartList) {
                console.log('有東西');
                // 同樣的東西
                const targetFood = cartStore.cartList.find((item) => item.uid === food.uid);
                if (targetFood) { num = targetFood.num + 1; }
            }
            // 不同的東西直接加
            console.log('沒東西');
            firebaseDb.set(firebaseDb.ref(db, `userInfo/${user.uid}/shoppingCart/${food.uid}`), {
                ...food,
                num
            });
        } else {
            open_loginAlertDialog.value = true;
        }
    });
}
</script>

<template>
    <div class="bg-[url('/img/bg.jpg')]  p-12 flex justify-center gap-10 text-amber-950 w-full">
        <div class="w-1/5">
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
        </div>
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
                    <el-button class="w-[90%] mt-5" @click="addToShoppingCart(food)">加入購物車</el-button>
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
