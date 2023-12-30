<script setup>
import * as firebaseDb from "firebase/database";
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';

const db = firebaseDb.getDatabase();
const authStore = useAuthStore();

// 食物列表相關
const foodList = ref([]);
function getFoodList() {
    firebaseDb.get(firebaseDb.ref(db, "foodInfo"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                foodList.value = Object.values(data);
            } else {
                foodList.value = null;
                console.log('no data');
            }
        });
}

getFoodList();

// 購物車相關
const cartStore = useCartStore();
function addToShoppingCart(cartItem) {
    if (authStore.userInfo?.uid) {
        let num = 1;
        if (cartStore.cartList) {
            const targetItem = cartStore.cartList.find((item) => item.uuid === cartItem.uuid);
            if (targetItem) num = targetItem.num + 1;
        }
        firebaseDb.set(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${cartItem.uuid}`), {
            ...cartItem,
            num
        });
    } else {
        alert('請先登入');
    }
}
function updateShoppingCart(val, cartItem) {
    firebaseDb.update(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${cartItem.uuid}`), { num: val });
}
function deleteFromShoppingCart(cartItem) {
    firebaseDb.remove(firebaseDb.ref(db, `userInfo/${authStore.userInfo.uid}/shoppingCart/${cartItem.uuid}`));
}
</script>

<template>
    <div>
        <section>
            <h3 class="text-lg">食物</h3>
            <div v-for="food in foodList" :key="food.uuid">
                <div>品項：{{ food.title }}</div>
                <div>價格：{{ food.price }}</div>
                <el-button @click="addToShoppingCart(food)">加入購物車</el-button>
            </div>
        </section>

        <br />
        <section>
            <h3 class="text-lg">購物車(總價：{{ cartStore.cartSum }})</h3>
            <div v-for="cardItem in cartStore.cartList" :key="cardItem.uuid">
                <div>品項：{{ cardItem.title }}</div>
                <div>價格：{{ cardItem.price }}</div>
                <el-input-number :model-value="cardItem.num" :min="1" size="small"
                    @change="updateShoppingCart($event, cardItem)" />
                <el-button @click="deleteFromShoppingCart(cardItem)">刪除品項</el-button>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped></style>
