<script setup>
import * as firebaseAuth from "firebase/auth";

const email = ref('');
const password = ref('');
const errMsg = ref('');
const auth = firebaseAuth.getAuth();

const register = () => {
    firebaseAuth.createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log('成功註冊!', data);
            navigateTo('/order');
        })
        .catch((error) => {
            console.log('error', error);
            switch (error.message) {
                case 'INVALID_EMAIL':
                    errMsg.value = '無效的Email帳號';
                    break;
                case 'WEAK_PASSWORD : Password should be at least 6 characters':
                    errMsg.value = '密碼至少為6個(含)以上的字符';
                    break;
                case 'EMAIL_EXISTS':
                    errMsg.value = 'Email帳號已註冊';
                    break;
                default:
                    errMsg.value = 'Email帳號或密碼不符合規格!!!';
                    break;
            }
        });
};
</script>

<template>
    <h2>創建您的帳號</h2>
    <div>Email帳號：<input type="text" placeholder="Email" v-model="email" /></div>
    <div>密碼：<input type="password" placeholder="Password" v-model="password" /></div>
    <p v-if="errMsg">{{ errMsg }}</p>
    <div><button @click="register">註冊並登入</button></div>
    <p><router-link to="auth/login">已經註冊帳號了？快去登錄吧！</router-link></p>
</template>

<style scoped></style>
