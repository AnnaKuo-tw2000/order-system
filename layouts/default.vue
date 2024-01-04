<script setup>
import * as firebaseAuth from "firebase/auth";
import * as firebaseDb from "firebase/database";
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const auth = firebaseAuth.getAuth();
const authStore = useAuthStore();
const db = firebaseDb.getDatabase();
const cartStore = useCartStore();
let lastUserUid = null;

firebaseAuth.onAuthStateChanged(auth, (user) => {
    if (user) {
        // 有用戶信息(登入)
        authStore.userInfo = user;
        console.log('我跑了登入');
        firebaseDb.onValue(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart`), (snapshot) => {
            const data = snapshot.val();
            cartStore.cartList = data ? Object.values(data) : null;
            lastUserUid = authStore.userInfo.uid;
        });
    } else {
        // 無用戶信息(登出)
        authStore.userInfo = null;
        console.log('我跑了登出');
        if (lastUserUid) {
            firebaseDb.off(firebaseDb.ref(db, `userInfo/${lastUserUid}/shoppingCart`));
            cartStore.cartList = null;
            lastUserUid = null;
        }
    }
});
</script>

<template>
    <div class="overflow-x-hidden">
        <TheHeader />
        <TheBanner />
        <slot />
        <TheFooter />
    </div>
</template>
