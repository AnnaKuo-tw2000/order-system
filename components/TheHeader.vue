<script setup>
</script>

<template>
    <div class="bg-[url('/img/header_desktop.png')] bg-cover h-[420px]">
        <div class="flex justify-between items-center px-10 py-7 bg-black/[0.88] text-white h-[56px] ">
            <div class="text-lg font-black">六角西餐廳</div>
            <div class="flex gap-3">
                <NuxtLink :to="{ name: 'index' }">特色</NuxtLink>
                <NuxtLink :to="{ name: 'about' }" style="margin-left: 10px">主廚</NuxtLink>
                <NuxtLink :to="{ name: 'about' }" style="margin-left: 10px">地圖</NuxtLink>
            </div>
        </div>
        <div class="bg-black/[0.3] w-[460px] h-[152px] mx-auto my-auto relative top-[20%] p-5 text-center text-white">
            <div class="text-3xl leading-loose">咬一口就無法忘懷的漢堡</div>
            <div>七夕絕對無法錯過的好滋味 </div>

            <div>六角大漢堡</div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
