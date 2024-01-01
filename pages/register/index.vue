<script setup>
import { Phone, Lock } from '@element-plus/icons-vue';

const input2 = ref('');
</script>

<template>
    <div class="bg-[url('/img/bg.jpg')] text-amber-950 py-5 flex flex-col items-center">
        <div class="flex items-center justify-center mb-4">
            <h1 class="text-5xl font-black">小咪西餐廳</h1>
            <img src="../../img/cat2.png" alt="" class="w-[12%]">
        </div>
        <p class="text-2xl font-semibold mb-3 relative bottom-5">享受美食好味道</p>
        <div class="w-[40%] h-[275px] border shadow-lg flex flex-col p-4 gap-1">
            <h1 class="text-xl font-semibold text-center mb-4">REGISTER</h1>
            <div class="flex gap-5">
                <div class="w-1/2">
                    <p>就是這樣條款：<br>
                        Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam
                        elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui
                        sed,
                        ultricies sapien...</p>
                </div>
                <div class="w-1/2 flex flex-col">
                    <p>Phone Num</p>
                    <el-input v-model="input2" class="w-50" placeholder="" :prefix-icon="Phone" />
                    <p>Password</p>
                    <el-input v-model="input2" class="w-50" placeholder="" :prefix-icon="Lock" />
                    <el-button type="warning" class="w-1/2 self-center mt-4">註冊</el-button>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>
