<script setup>
import { KnifeFork } from '@element-plus/icons-vue';

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
            class="bg-black/[0.3] w-auto h-auto mx-auto py-5 px-3 text-center text-white absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
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
