<script setup>
import { ref } from 'vue';

const input = ref('');
const radio1 = ref('1');
</script>

<template>
    <section class="bg-[url('/img/bg.jpg')] p-10 text-amber-950 max-md:p-6">
        <div class="text-center text-xl mb-5">我們的位子不太夠坐要不要先訂位呢？</div>
        <div class="flex max-md:gap-6">
            <div class="w-1/2">
                <img src="../../img/Map.png" alt="" class=" h-full">
            </div>

            <div class="flex flex-col w-1/2 gap-1">
                <p>姓名</p>
                <el-input v-model="input" placeholder="Please input" />

                <p>電話</p>
                <el-input v-model="input" placeholder="Please input" />

                <p>信箱</p>
                <el-input v-model="input" placeholder="Please input" />

                <p>人數</p>
                <el-input v-model="input" placeholder="Please input" />

                <p class="mt-2">是否需要素食</p>
                <el-radio-group v-model="radio1" class="relative bottom-2">
                    <el-radio label="1" size="large">Option 1</el-radio>
                    <el-radio label="2" size="large">Option 2</el-radio>
                </el-radio-group>

                <el-row class=" self-end">
                    <el-button type="info">取消</el-button>
                    <el-button type="warning">確認</el-button>
                </el-row>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
:deep() {
    .el-input {
        width: 100%;
    }
}
</style>
