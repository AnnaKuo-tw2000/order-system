<script setup>

</script>

<template>
    <div class="bg-[url('/img/bg.jpg')] h-[200px] flex justify-between items-center p-20 text-amber-950">
        <div class="">
            <h1 class="leading-loose text-xl font-semibold">台中店</h1>
            <ul>
                <li class="text-lg text-slate-500">Tel 04-886-8866</li>
                <li>Add 台中市薯條區漢堡路35號</li>
                <li>Service Time 11:00-23:00</li>
                <li>Email xiaomi_restaurant@google.com</li>
            </ul>
        </div>

        <div class="w-[300px]">
            <div class="flex h-[40%]  mb-2">
                <div class="flex items-center ">
                    <h1 class=" text-5xl font-extrabold">小咪西餐廳</h1>
                    <img src="../img/cat2.png" alt="" class="w-[20%]">
                </div>
            </div>
            <div class="flex gap-2 justify-end">
                <font-awesome-icon :icon="['fab', 'square-instagram']" />
                <font-awesome-icon :icon="['fab', 'square-facebook']" />
                <font-awesome-icon :icon="['fab', 'line']" />
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
:deep() {
    .svg-inline--fa {
        height: 40px;
        width: 40px;
    }
}
</style>
