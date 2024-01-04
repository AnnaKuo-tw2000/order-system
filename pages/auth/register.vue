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
        <div class="w-[40%] h-auto border shadow-lg flex flex-col p-4 gap-1">
            <h1 class="text-xl font-semibold text-center mb-4">REGISTER</h1>
            <div class="flex gap-5">
                <div class="w-1/2">
                    <p>就是這樣條款：<br>
                        "請注意，完成註冊後，您將獲得重要的提醒事項和更新通知。請確保定期檢查您的帳戶通知以保持最新資訊。感謝您的註冊！"</p>
                </div>
                <div class="w-1/2 flex flex-col">
                    <p>Email</p>
                    <el-input v-model="input2" class="w-50" placeholder="" :prefix-icon="Message" />
                    <p>Password</p>
                    <el-input v-model="input2" class="w-50" placeholder="" :prefix-icon="Lock" />
                    <NuxtLink :to="{ name: 'auth-login' }" class="h-full flex items-center">已有賬號？快去登入</NuxtLink>
                    <el-button type="warning" class="w-1/2 self-center mt-4">註冊並登入</el-button>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>
