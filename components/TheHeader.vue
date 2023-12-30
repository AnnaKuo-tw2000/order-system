<script setup>
import { KnifeFork } from '@element-plus/icons-vue';
</script>

<template>
    <header class="h-[420px]">
        <nav class="flex justify-between items-center px-10 bg-black/[0.88] text-white h-[80px] ">
            <h1 class="text-3xl font-black">小咪西餐廳</h1>
            <img src="../img/cat2.png" alt="" class="w-[13%] relative right-[240px] top-1">
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
        <el-carousel indicator-position="outside" height="500px" autoplay>
            <el-carousel-item>
                <img src="../img/food1.jpg" alt="" class="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/food3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/food4.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/food5.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="bg-black/[0.3] w-[460px] h-[152px] mx-auto my-auto relative bottom-[90%] p-5 text-center text-white">
            <div class="text-3xl leading-loose">咬一口就無法忘懷的漢堡</div>
            <div>絕對無法錯過的好滋味 </div>
            <div class="flex items-center justify-center">
                <el-icon>
                    <KnifeFork />
                </el-icon>
                <div>小咪西餐廳</div>
                <el-icon>
                    <KnifeFork />
                </el-icon>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
:deep() {
    .svg-inline--fa {
        height: 30px;
    }
}

// .el-carousel__item h3 {
//     display: flex;
//     color: #475669;
//     opacity: 0.75;
//     line-height: 300px;
//     margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//     background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//     background-color: #d3dce6;
// }
</style>
