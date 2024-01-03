<script setup>
import { Message, Lock } from '@element-plus/icons-vue';

const input2 = ref('');
</script>

<template>
    <div class="bg-[url('/img/bg.jpg')] text-amber-950 py-5 flex flex-col items-center">
        <div class="flex items-center justify-center mb-4">
            <h1 class="text-5xl font-black">小咪西餐廳</h1>
            <img src="../../img/cat2.png" alt="" class="w-[12%]">
        </div>
        <p class="text-2xl font-semibold mb-3 relative bottom-5">享受美食好味道</p>
        <div class="w-[25%] h-[275px] border shadow-lg flex flex-col p-4 gap-1">
            <h1 class="text-xl font-semibold text-center mb-4">LOGIN</h1>
            <p>Email</p>
            <el-input v-model="input2" class="w-50" placeholder="" :prefix-icon="Message" />
            <p>Password</p>
            <el-input v-model="input2" class="w-50" placeholder="" :prefix-icon="Lock" />
            <NuxtLink :to="{ name: 'auth-register' }" class="h-full flex items-center">還沒註冊？快點去吧！</NuxtLink>
            <div class="flex justify-center mt-2 w-full">
                <el-button type="info" class="w-1/2">取消</el-button>
                <el-button type="warning" class="w-1/2">確認</el-button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>
