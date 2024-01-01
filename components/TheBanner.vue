<script setup>
import { KnifeFork } from '@element-plus/icons-vue';

// import { ref } from 'vue';

// const num = ref(1);

</script>

<template>
    <div class="relative">
        <el-carousel height="100vw" autoplay>
            <el-carousel-item>
                <img src="../img/food1.jpg" alt="" class="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/food3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/food4.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/food5.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
        <div
            class="bg-black/[0.3] w-1/3 h-1/4 mx-auto p-5 text-center text-white absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
            <div class="text-4xl leading-loose">咬一口就無法忘懷的漢堡</div>
            <div class="text-2xl leading-1">絕對無法錯過的好滋味 </div>
            <div class="flex items-center justify-center">
                <el-icon>
                    <KnifeFork />
                </el-icon>
                <div class="text-2xl">小咪西餐廳</div>
                <el-icon>
                    <KnifeFork />
                </el-icon>
            </div>
        </div>
        <!-- <div class="w-[20%] h-auto bg-white absolute bottom-[300px] left-[75%] shadow-md shadow-slate-500 p-4">

            <div class="flex flex-col gap-3 mb-3">
                <div class="flex gap-3">
                    <img src="..//img/food10.jpg" alt="" class="w-1/4">
                    <div>
                        <p>經典漢堡套餐</p>
                        <p>Classic Hamburger Package</p>
                        <p class="text-red-600 mb-2">$120</p>
                        <div class="flex items-center">
                            <el-input-number v-model="num" :min="1" :max="10" />
                        </div>
                    </div>
                </div>
                <div class="flex gap-3">
                    <img src="..//img/food10.jpg" alt="" class="w-1/4">
                    <div>
                        <p>經典漢堡套餐</p>
                        <p>Classic Hamburger Package</p>
                        <p class="text-red-600 mb-2">$120</p>
                        <div class="flex items-center">
                            <el-input-number v-model="num" :min="1" :max="10" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t-2 flex flex-col gap-3 py-2">
                <p class="text-lg">購物車中有1品項</p>
                <div class="flex justify-between">
                    <p>合計</p>
                    <p class="text-red-600">NT$240</p>
                </div>
                <el-button type="primary" round class="w-[60%] self-center">結賬</el-button>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
:deep() {
    .svg-inline--fa {
        height: 30px;
    }

    .el-carousel__container {
        max-height: 85vh;

        .el-carousel__item {
            img {
                @apply object-cover h-full w-full;
            }
        }
    }
}

// .el-carousel__item h3 {
//     display: flex;
//     color: #475669;
//     opacity: 0.75;
//     line-height: 300px;
//     margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//     background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//     background-color: #d3dce6;
// }
</style>
