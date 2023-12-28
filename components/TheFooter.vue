<script setup>

</script>

<template>
    <div class="bg-[url('/img/bg.jpg')] h-[200px] flex justify-between  py-8 px-11 max-md:px-2 text-amber-950">
        <div class="w-1/3">
            <h1 class="leading-loose text-xl font-semibold">台中店</h1>
            <ul>
                <li class="text-lg text-slate-500">Tel 04-886-8866</li>
                <li>Add 台中市薯條區漢堡路35號</li>
                <li>Service Time 11:00-23:00</li>
                <li>Email xiaomi_restaurant@google.com</li>
            </ul>
        </div>

        <div class="w-1/3">
            <div class="flex h-[40%]">
                <h1 class=" text-5xl font-extrabold">小咪西餐廳</h1>
                <div class="w-1/3"><img src="../img/cat2.png" alt="" class="w-[100%] relative right-[30px] bottom-5">
                </div>

            </div>

            <div class="flex gap-2 ">
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
    }
}
</style>
