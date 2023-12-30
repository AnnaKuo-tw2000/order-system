<script setup>
import { Search } from '@element-plus/icons-vue';

const input3 = ref('');
</script>

<template>
    <div class="bg-[url('/img/bg.jpg')]  p-12 flex gap-6 text-amber-950 w-full">

        <div class="w-1/4">
            <div class="flex items-center justify-center">
                <div>icon</div>
                <div class="text-lg leading-[3]">線上訂購美食</div>
            </div>

            <ul class="">
                <li class="border-b border-black leading-loose hover:bg-amber-950  hover:text-white cursor-pointer">全部(23)
                </li>
                <li class="border-b border-black leading-loose  hover:bg-amber-950  hover:text-white cursor-pointer">
                    只愛吃薯條(18)</li>
                <li class="border-b border-black leading-loose  hover:bg-amber-950  hover:text-white cursor-pointer">
                    加熱就可食(1)</li>
                <li class="border-b border-black leading-loose  hover:bg-amber-950  hover:text-white cursor-pointer">
                    不敢漢堡系列(4)</li>
            </ul>
        </div>

        <div class="flex flex-col gap-4 w-3/4">
            <div class="flex items-center justify-between w-full">
                <el-input v-model="input3" class="w-50 m-2" size="small" placeholder="" :suffix-icon="Search" />

            </div>
            <div class="flex justify-between flex-wrap px-2 w-full gap-6">
                <div class="flex flex-col w-[30%] h-[260px]  items-center shadow-lg">
                    <img src="../../img/product_1.png" alt="" class="mb-5">
                    <div class="text-xl leading-[1] font-semibold">經典漢堡套餐</div>
                    <div class="text-sm leading-loose mb-1">Classic Hamburger Package</div>
                    <div class=" w-24 border-b border-black mb-3"></div>
                    <div class="text-xl font-semibold mb-1">$120</div>
                    <el-button class="w-[90%]">加入購物車</el-button>
                </div>
                <div class="flex flex-col w-[30%] h-[260px] items-center shadow-lg">
                    <img src="../../img/product_2.png" alt="" class="mb-5">
                    <div class="text-xl leading-[1] font-semibold">英俊香腸</div>
                    <div class="text-sm leading-loose mb-1">Handsome Sausage</div>
                    <div class=" w-24 border-b border-black mb-3"></div>
                    <div class="text-xl font-semibold mb-1">$1024</div>
                    <el-button class="w-[90%]">加入購物車</el-button>
                </div>
                <div class="flex flex-col w-[30%] h-[260px] items-center shadow-lg">
                    <img src="../../img/product_3.png" alt="" class="mb-5">
                    <div class="text-xl leading-[1] font-semibold">漢堡兄弟</div>
                    <div class="text-sm leading-loose mb-1">Hamburg Brothers</div>
                    <div class=" w-24 border-b border-black mb-3"></div>
                    <div class="text-xl font-semibold mb-1">$792</div>
                    <el-button class="w-[90%]">加入購物車</el-button>
                </div>
                <div class="flex flex-col w-[30%] h-[260px] items-center shadow-lg">
                    <img src="../../img/product_4.png" alt="" class="mb-5">
                    <div class="text-xl leading-[1] font-semibold">完美願望</div>
                    <div class="text-sm leading-loose mb-1">Dragon Ball Package</div>
                    <div class=" w-24 border-b border-black mb-3"></div>
                    <div class="text-xl font-semibold mb-1">$2290</div>
                    <el-button class="w-[90%]">加入購物車</el-button>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
:deep() {
    .el-input {
        width: 65%;
        border: 2px solid #451a03;
    }
}
</style>
