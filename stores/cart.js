import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
    const cartList = ref(null);
    const cartSum = computed(() => {
        if (cartList.value) {
            return cartList.value.reduce(
                (acc, curItem) => acc + curItem.price * curItem.num,
                0
            );
        }
        return 0;
    });
    return { cartList, cartSum };
});
