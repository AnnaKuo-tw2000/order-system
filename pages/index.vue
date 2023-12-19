<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
console.log(store.count);
</script>

<template>
    <div>
        <h1>首頁</h1>
        <input type="text" />
    </div>
</template>

<style lang="scss" scoped>
h1 {
    width: var(--hello);
}
</style>
