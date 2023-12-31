<script setup>
</script>

<template>
    <nav class="fixed top-0 flex justify-between items-center px-10 text-white h-[70px] z-50 w-full">
        <div class="flex items-center">
            <h1 class="text-3xl font-black">小咪西餐廳</h1>
            <img src="../img/cat2.png" alt="" class="h-[55px] ml-1" />
        </div>
        <ul class="flex h-full">
            <li class="h-full hover:bg-slate-700 px-4">
                <NuxtLink :to="{ name: 'index' }" class="h-full flex items-center">關於我們
                </NuxtLink>
            </li>
            <li class="h-full hover:bg-slate-700 px-4">
                <NuxtLink :to="{ name: 'about' }" class="h-full flex items-center">線上訂購</NuxtLink>
            </li>
            <li class="h-full hover:bg-slate-700 px-4">
                <NuxtLink :to="{ name: 'reserve' }" class="h-full flex items-center">訂位資訊</NuxtLink>
            </li>
            <li class="h-full hover:bg-slate-700 px-4">
                <NuxtLink :to="{ name: 'login' }" class="h-full flex items-center">登入</NuxtLink>
            </li>
            <li class="h-full hover:bg-slate-700 px-4">
                <NuxtLink :to="{ name: 'register' }" class="h-full flex items-center">註冊</NuxtLink>
            </li>
            <li class="h-full flex items-center hover:bg-slate-700 px-4 cursor-pointer">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%);
}
</style>
