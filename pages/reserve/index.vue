<script setup>
import { ref } from 'vue';

const input = ref('');
const radio1 = ref('1');
</script>

<template>
    <section class="bg-[url('/img/bg.jpg')] p-10 text-amber-950 max-md:p-6">
        <div class="text-center text-3xl mb-10">我們的位子不太夠坐要不要先訂位呢？</div>
        <div class="flex justify-center gap-10">
            <div class="w-auto">
                <img src="../../img/Map.png" alt="" class=" h-full">
            </div>

            <div class="flex flex-col w-[30%] gap-1">
                <p>姓名</p>
                <el-input v-model="input" placeholder="" />

                <p>電話</p>
                <el-input v-model="input" placeholder="" />

                <p>信箱</p>
                <el-input v-model="input" placeholder="" />

                <p>人數</p>
                <el-input v-model="input" placeholder="" />

                <p class="mt-2">是否需要素食</p>
                <el-radio-group v-model="radio1" class="relative bottom-2">
                    <el-radio label="1" size="large">是</el-radio>
                    <el-radio label="2" size="large">否</el-radio>
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
