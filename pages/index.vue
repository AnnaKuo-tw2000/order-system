<script setup>

</script>

<template>
    <div>
        <section class="bg-primary h-[480px] py-12 px-20 text-amber-950 flex justify-between gap-20 items-center">
            <div class="w-1/2">
                <h1 class="text-4xl">小咪西餐廳</h1>
                <p class="text-xl mb-4 text-slate-500">SINCE 2000</p>
                <p>自2005年起，<br>
                    一座開滿美好燈光的小酒館從城市繁忙的角落誕生，<br>
                    這裡是一個融合美食與美酒，以及和諧家庭氛圍的空間。<br>
                    開業以來，我們一直秉持著梨妃的初衷，將每一位顧客視為家人般對待。<br>
                    這裡不只是一個餐酒館，更是一個記錄著人們幸福瞬間的地方。<br>感謝每一位顧客的支持與陪伴，<br>讓我們共同編織屬於這座小酒館的美好故事。</p>
            </div>
            <div class="w-1/2">
                <img src="../img/Inside the restaurant.jpg" alt="" class="w-full">
            </div>
        </section>

        <section class="bg-primary h-[520px] p-8 text-amber-950 ">
            <div class="flex justify-center items-center gap-4 mb-5">
                <div class="h-px w-20 border-b border-slate-500"></div>
                <div class="text-center leading-loose text-lg font-black">
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
                    <p class="text-sm">本店嚴選最新鮮的當季蔬菜，來自當地優質農田。每道料理都注重新鮮風味，以保留蔬菜的天然美味。我們致力於提供新鮮、營養豐富的蔬食饗宴，為您呈現最令人垂涎的美食體驗。</p>
                </div>
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5">
                    <div class="">
                        <img src="../img/feature_2.png" alt="" class="rounded-full w-[90%]">
                    </div>
                    <div>專業米其林廚師</div>
                    <p class="text-sm">
                        本店引進一流廚師，擁有豐富的國際經驗，精湛技藝糅合創新靈感。每位廚師都熱衷於用心製作獨特料理，以極致烹飪藝術呈現美味佳餚。品味本店獨特風格，感受廚師專業的烹調魔法。</p>
                </div>
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5">
                    <div class="">
                        <img src="../img/feature_3.png" alt="" class="rounded-full w-[90%]">
                    </div>
                    <div>對於專業不能退讓</div>
                    <p class="text-sm">
                        本店以專業烹飪藝術見稱，匠心獨具的廚師團隊擁有豐富國際經驗。我們致力於提供最新鮮的食材，結合獨特創新的料理手法，打造精緻口味。以嚴選食材、專業技術，為您呈現獨一無二的美食饗宴</p>
                </div>
            </div>
        </section>

        <section class="bg-primary h-[480px]  ">
            <div class="text-center leading-[4] text-2xl font-bold text-amber-950 ">料理精釀．工藝</div>
            <figure class="flex flex-col">
                <video controls preload autoplay loop muted width="50%" class="mx-auto my-auto">
                    <source src="../img/cook-preview.mp4" type="video/mp4">
                </video>

            </figure>
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

    </div>
</template>

<style lang="scss" scoped></style>
