<script setup>
import * as firebaseAuth from "firebase/auth";

const email = ref('');
const password = ref('');
const errMsg = ref('');
const auth = firebaseAuth.getAuth();

const login = () => {
    firebaseAuth.signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log('成功登入', data);
            navigateTo('/example/order');
        })
        .catch((error) => {
            switch (error.message) {
                case 'INVALID_EMAIL':
                    errMsg.value = '無效的Email帳號';
                    break;
                default:
                    errMsg.value = JSON.stringify(error);
                    console.log('給我出來');
                    break;
            }
        });
};
</script>

<template>
    <h2>登入您的帳號</h2>
    <div>Email帳號：<input type="text" placeholder="Email" v-model="email" /></div>
    <div>密碼：<input type="password" placeholder="Password" v-model="password" @keyup.enter="login" /></div>
    <p v-if="errMsg">{{ errMsg }}</p>
    <div><button @click="login">登入</button></div>
    <p>
        <NuxtLink to="/example/auth/register">未註冊帳號？還不快去</NuxtLink>
    </p>
</template>

<style lang="scss" scoped></style>
