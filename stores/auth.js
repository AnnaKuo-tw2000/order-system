import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const userInfo = ref(null);
    return { userInfo };
});
