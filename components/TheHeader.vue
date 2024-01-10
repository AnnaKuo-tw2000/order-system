<script setup>
import * as firebaseAuth from "firebase/auth";
import * as firebaseDb from "firebase/database";
import { useAuthStore } from '@/stores/auth';

const auth = firebaseAuth.getAuth();
const authStore = useAuthStore();
const cartStore = useCartStore();
const db = firebaseDb.getDatabase();

function logOut() {
    firebaseAuth.signOut(auth);
}

// 刪除購物車
function deleteFood(food) {
    firebaseDb.remove(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${food.uid}`));
}
// 更新購物車
function updateShoppingCart(num, food) {
    firebaseDb.update(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${food.uid}`), {
        num
    });
}
</script>

<template>
    <nav class="fixed top-0 flex justify-between items-center px-10 text-white h-[70px] z-50 w-full">
        <div class="flex items-center">
            <h1 class="text-3xl font-black">小咪西餐廳</h1>
            <img src="../img/logo.png" alt="" class="h-[55px] ml-1" />
        </div>
        <ul class="flex h-full text-xl">
            <li class="h-full mx-4">
                <NuxtLink :to="{ name: 'index' }" class="h-full flex items-center">關於我們
                </NuxtLink>
            </li>
            <li class="h-full mx-4">
                <NuxtLink :to="{ name: 'order-UserOrderPage' }" class="h-full flex items-center">線上訂購</NuxtLink>
            </li>
            <li class="h-full mx-4">
                <NuxtLink :to="{ name: 'order-AdminOrderPage' }" class="h-full flex items-center">管理訂餐</NuxtLink>
            </li>
            <li class="h-full mx-4" v-if="!authStore.userInfo">
                <NuxtLink :to="{ name: 'auth-login' }" class="h-full flex items-center">登入</NuxtLink>
            </li>
            <li class="h-full mx-4" @click="logOut" v-else>
                <span class="h-full flex items-center">登出</span>
            </li>

            <el-popover placement="bottom" title="" :width="350" trigger="click" content="">
                <template #reference>
                    <li class="h-full flex items-center mx-4 cursor-pointer"
                        @click="openShoppingDialog = !openShoppingDialog">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                    </li>
                </template>
                <template #default>
                    <div class="p-4 " v-if="cartStore.cartList">
                        <div v-for="food in cartStore.cartList" :key="food.uid" class="flex flex-col gap-3 mb-3">
                            <div class="flex gap-3">
                                <img :src="food.imageUrl" alt="" class="w-1/4 h-1/4">
                                <div>
                                    <p class="text-lg">{{ food.title }}</p>
                                    <p class="text-red-600 mb-2">${{ food.price }}</p>
                                    <div class="flex items-center justify-between ">
                                        <el-input-number v-model="food.num" :min="1" :max="10"
                                            @change="updateShoppingCart($event, food)" />
                                        <font-awesome-icon :icon="['far', 'trash-can']" @click="deleteFood(food)"
                                            class="ml-4 hover:cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="border-t-2 flex flex-col gap-3 py-2">
                            <p class="text-lg">購物車中有{{ cartStore.cartList.length }}品項</p>
                            <div class="flex justify-between">
                                <p>合計</p>
                                <p class="text-red-600">NT${{ cartStore.cartSum }}</p>
                            </div>
                            <el-button type="primary" round class="w-[60%] self-center">結賬</el-button>
                        </div>
                    </div>
                    <div v-else class="text-center">購物車中沒有商品</div>
                </template>
            </el-popover>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%);
}

li {
    position: relative;
}

li:after {
    content: '';
    width: 0%;
    border-bottom: 2px dashed white;
    position: absolute;
    bottom: 0;
    transition: all .3s linear;

}

li:hover::after {
    width: 100%;
}
</style>
