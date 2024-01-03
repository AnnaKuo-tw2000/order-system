<script setup>

// const openShoppingDialog = ref(false);

const num = ref(1);
</script>

<template>
    <nav class="fixed top-0 flex justify-between items-center px-10 text-white h-[70px] z-50 w-full">
        <div class="flex items-center">
            <h1 class="text-3xl font-black">小咪西餐廳</h1>
            <img src="../img/cat2.png" alt="" class="h-[55px] ml-1" />
        </div>
        <ul class="flex h-full text-xl">
            <li class="h-full  mx-4">
                <NuxtLink :to="{ name: 'index' }" class="h-full flex items-center">關於我們
                </NuxtLink>
            </li>
            <li class="h-full  mx-4">
                <NuxtLink :to="{ name: 'order' }" class="h-full flex items-center">線上訂購</NuxtLink>
            </li>
            <li class="h-full  mx-4">
                <NuxtLink :to="{ name: 'reserve' }" class="h-full flex items-center">訂位資訊</NuxtLink>
            </li>
            <li class="h-full  mx-4">
                <NuxtLink :to="{ name: 'auth-login' }" class="h-full flex items-center">登入</NuxtLink>
            </li>
            <li class="h-full  mx-4">
                <NuxtLink :to="{ name: 'auth-register' }" class="h-full flex items-center">註冊</NuxtLink>
            </li>

            <el-popover placement="bottom" title="" :width="350" trigger="click" content="">
                <template #reference>
                    <li class="h-full flex items-center  px-4 cursor-pointer"
                        @click="openShoppingDialog = !openShoppingDialog">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                    </li>
                </template>
                <template #default>
                    <div class="p-4 ">
                        <div class="flex flex-col gap-3 mb-3">
                            <div class="flex gap-3">
                                <img src="..//img/food10.jpg" alt="" class="w-1/4 h-1/4">
                                <div>
                                    <p class="text-lg">經典漢堡套餐</p>
                                    <p>Classic Hamburger Package</p>
                                    <p class="text-red-600 mb-2">$120</p>
                                    <div class="flex items-center justify-between ">
                                        <el-input-number v-model="num" :min="1" :max="10" />
                                        <font-awesome-icon :icon="['far', 'trash-can']" class="hover:cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <img src="..//img/food10.jpg" alt="" class="w-1/4 h-1/4">
                                <div>
                                    <p class="text-lg">經典漢堡套餐</p>
                                    <p>Classic Hamburger Package</p>
                                    <p class="text-red-600 mb-2">$120</p>
                                    <div class="flex items-center  justify-between">
                                        <el-input-number v-model="num" :min="1" :max="10" />
                                        <font-awesome-icon :icon="['far', 'trash-can']" class="hover:cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="border-t-2 flex flex-col gap-3 py-2">
                            <p class="text-lg">購物車中有2品項</p>
                            <div class="flex justify-between">
                                <p>合計</p>
                                <p class="text-red-600">NT$240</p>
                            </div>
                            <el-button type="primary" round class="w-[60%] self-center">結賬</el-button>
                        </div>
                    </div>
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
