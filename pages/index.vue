<script setup>
import { ref } from 'vue';

const input = ref('');
const radio1 = ref('1');

</script>

<template>
    <div>

        <section class="bg-primary h-[520px] p-8 text-amber-950 ">
            <div class="flex justify-center items-center gap-4">
                <div class="h-px w-20 border-b border-slate-500"></div>
                <div class="text-center leading-loose text-lg">
                    <p>客人總是在詢問</p>
                    <p>這麼好吃的秘訣是什麼</p>

                </div>
                <div class="h-px w-20 border-b border-slate-500"></div>
            </div>

            <div class="flex justify-evenly">
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5 ">
                    <div class="">
                        <img src=" ../img/feature_1.png" alt="" class="rounded-full w-[90%]">
                    </div>
                    <div>台灣本土蔬菜</div>
                    <p class="text-sm">In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam.
                        Integer et elit
                        eget elit facilisis tristique. Nam vel iaculis mauris.</p>
                </div>
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5">
                    <div class="">
                        <img src="../img/feature_2.png" alt="" class="rounded-full w-[90%]">
                    </div>
                    <div>專業米其林廚師</div>
                    <p class="text-sm">Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus
                        porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis
                        accumsan turpis.</p>
                </div>
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5">
                    <div class="">
                        <img src="../img/feature_3.png" alt="" class="rounded-full w-[90%]">
                    </div>
                    <div>對於專業不能退讓</div>
                    <p class="text-sm">Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus
                        porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis
                        accumsan turpis.</p>
                </div>
            </div>
        </section>

        <section class="bg-amber-950 text-white h-[443px] flex gap-5 px-12 max-md:px-6">
            <div class="">
                <img src="../img/main_chef_brown.png" alt="" class="h-[100%]">
            </div>
            <div class="w-[500px] flex flex-col justify-center gap-3 ">
                <p>今日主廚：帕金森，梅再帕</p>
                <p class="text-sm">today chef:plum in shock</p>
                <p class="text-sm">Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
                    vulputate. Etiam elit
                    elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,
                    ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam
                    eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec
                    sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum.
                    Donec congue lorem a molestie bibendum.</p>
            </div>
        </section>

        <section class="bg-primary h-[300px] py-8 px-4 text-amber-950 max-md:px-0">
            <div class="text-center text-xl mb-5">聽聽別人的想法</div>
            <div class="flex justify-evenly gap-3 ">

                <div class="flex w-[30%] max-md:gap-2 ">
                    <div class="w-full">
                        <img src="../img/avatar_1.png" alt="" class="rounded-full">
                    </div>
                    <div class="flex flex-col gap-5 max-md:gap-2">
                        <p>高雄一口吃</p>
                        <p>自從吃了這間餐廳以後，口水連續留了一個多月沒停，下次不要再讓我遇到，不然我連桌子都啃下去。</p>
                        <p class="self-end">----產品經理</p>
                    </div>
                </div>
                <div class="flex w-[30%] max-md:gap-2">
                    <div class="w-full">
                        <img src="../img/avatar_2.png" alt="" class="rounded-full">
                    </div>
                    <div class="flex flex-col gap-5 max-md:gap-2">
                        <p>廟口小霸王</p>
                        <p>自從吃了這間餐廳以後，口水連續留了一個多月沒停，下次不要再讓我遇到，不然我連桌子都啃下去。</p>
                        <p class="self-end">----金身道士</p>
                    </div>
                </div>
                <div class="flex w-[30%] max-md:gap-2">
                    <div class="w-full">
                        <img src="../img/avatar_3.png" alt="" class="rounded-full">
                    </div>
                    <div class="flex flex-col gap-5 max-md:gap-2">
                        <p>廟口小霸王</p>
                        <p>自從吃了這間餐廳以後，口水連續留了一個多月沒停，下次不要再讓我遇到，不然我連桌子都啃下去。</p>
                        <p class="self-end">----美麗萬分</p>
                    </div>
                </div>

            </div>
        </section>
        <section class="bg-stone-100 h-[530px] p-10 text-amber-950 max-md:p-6">
            <div class="text-center text-xl mb-5">我們的位子不太夠坐要不要先訂位呢？</div>
            <div class="flex max-md:gap-6">
                <div class="w-1/2">
                    <img src="../img/Map.png" alt="" class=" h-full">
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

    </div>
</template>

<style lang="scss" scoped>
:deep() {
    .el-input {
        width: 100%;
    }
}
</style>
