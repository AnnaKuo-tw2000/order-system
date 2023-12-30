<script setup>
import { KnifeFork } from '@element-plus/icons-vue';
import * as firebaseAuth from "firebase/auth";
import { useAuthStore } from '@/stores/auth';

const auth = firebaseAuth.getAuth();
const authStore = useAuthStore();

function logOut() {
    firebaseAuth.signOut(auth);
}
</script>

<template>
    <header class="bg-[url('/img/header_desktop.png')] bg-cover bg-center h-[420px]">
        <nav class="flex justify-between items-center px-10 bg-black/[0.88] text-white h-[56px] ">
            <h1 class="text-lg font-black">小咪西餐廳</h1>
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
                <li class="h-full hover:bg-slate-700 px-4" v-if="!authStore.userInfo">
                    <NuxtLink to="auth/login" class="h-full flex items-center">登入</NuxtLink>
                </li>
                <li class="h-full hover:bg-slate-700 px-4" @click="logOut" v-else>
                    <span class="h-full flex items-center">登出</span>
                </li>
                <!-- <NuxtLink :to="{ name: 'member' }" style="margin-left: 10px">提供服務</NuxtLink>
                <NuxtLink :to="{ name: 'member' }" style="margin-left: 10px">最新消息</NuxtLink>
                <NuxtLink :to="{ name: 'member' }" style="margin-left: 10px">美味據點</NuxtLink> -->
            </ul>
        </nav>
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
    </header>
</template>

<style lang="scss" scoped></style>
