<script setup>
import { Message, Lock } from '@element-plus/icons-vue';
import * as firebaseAuth from "firebase/auth";

const email = ref('');
const password = ref('');
const errMsg = ref('');
const auth = firebaseAuth.getAuth();

const login = () => {
    firebaseAuth.signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            const { uid } = data.user;
            if (uid === 'rFMULacV6NdOiqTfGH99sNDXwNg1') {
                navigateTo({ name: 'order-AdminOrderPage' });
            } else {
                navigateTo({ name: 'order-UserOrderPage' });
            }
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/missing-password':
                    errMsg.value = '請輸入正確的密碼';
                    break;
                case 'auth/invalid-credential':
                    errMsg.value = '請確認輸入的賬號和密碼是否正確';
                    break;
                default:
                    errMsg.value = 'Email帳號或密碼不符合規格!!!';
                    break;
            }
            ElMessage.error(errMsg.value);
        });
};
</script>

<template>
    <div class="bg-[url('/img/bg-1.jpg')] text-amber-950 py-5 flex flex-col items-center">
        <div class="flex items-center justify-center mb-4">
            <h1 class="text-5xl font-black">小咪西餐廳</h1>
            <img src="../../img/logo.png" alt="" class="w-[12%]">
        </div>
        <p class="text-2xl font-semibold mb-3 relative bottom-5">享受美食好味道</p>
        <div class="w-[30%] h-[275px] border shadow-lg flex flex-col p-4 gap-1 max-[900px]:w-[265px]">
            <h1 class="text-xl font-semibold text-center mb-4">LOGIN</h1>
            <p>Email</p>
            <el-input v-model="email" class="w-50" placeholder="" :prefix-icon="Message" />
            <p>Password</p>
            <el-input v-model="password" class="w-50" placeholder="" type="password" :prefix-icon="Lock" />
            <NuxtLink :to="{ name: 'auth-register' }" class="h-full flex items-center">還沒註冊？快點去吧！</NuxtLink>
            <div class="flex justify-center mt-2 w-full">
                <el-button type="info" class="w-1/2">取消</el-button>
                <el-button type="warning" :plain="true" class="w-1/2" @click="login">確認</el-button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>
