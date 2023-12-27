<script setup>
import { KnifeFork } from '@element-plus/icons-vue';
</script>

<template>
    <div class="bg-[url('/img/header_desktop.png')] bg-cover bg-center h-[420px]">
        <div class="flex justify-between items-center px-10 py-7 bg-black/[0.88] text-white h-[56px] ">
            <div class="text-lg font-black">六角西餐廳</div>
            <div class="flex gap-3">
                <NuxtLink :to="{ name: 'index' }">特色</NuxtLink>
                <NuxtLink :to="{ name: 'about' }" style="margin-left: 10px">線上訂購</NuxtLink>
                <NuxtLink :to="{ name: 'about' }" style="margin-left: 10px">地圖</NuxtLink>
            </div>
        </div>
        <div class="bg-black/[0.3] w-[460px] h-[152px] mx-auto my-auto relative top-[20%] p-5 text-center text-white">
            <div class="text-3xl leading-loose">咬一口就無法忘懷的漢堡</div>
            <div>七夕絕對無法錯過的好滋味 </div>
            <div class="flex items-center justify-center">
                <el-icon>
                    <KnifeFork />
                </el-icon>
                <div>六角大漢堡</div>
                <el-icon>
                    <KnifeFork />
                </el-icon>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
