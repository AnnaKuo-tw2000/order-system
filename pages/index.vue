<script setup>
import 'animate.css';
import { onMounted } from 'vue';

onMounted(() => {
    const option = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
    };

    const observer1 = new IntersectionObserver(callbackFunc1, option);
    const observer2 = new IntersectionObserver(callbackFunc2, option);

    function callbackFunc1(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('#leftContent').classList.add('show');
                document.querySelector('#rightContent').classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }

    function callbackFunc2(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('#menuContent').classList.add('animate__animated', 'animate__fadeInUpBig');
                observer.unobserve(entry.target);
            }
        });
    }

    observer1.observe(document.querySelector('#titleSection'));
    observer2.observe(document.querySelector('#popularSection'));
});

</script>

<template>
    <div class="bg-[url('/img/bg-1.jpg')] ">
        <section id="titleSection" class=" py-12 px-20 text-amber-950 flex justify-between items-center">
            <div id="leftContent" class="fadeInLeft w-auto ">
                <h1 class="text-4xl">小咪西餐廳</h1>
                <p class="text-2xl mb-4 text-slate-500">SINCE 2000</p>
                <p class="text-xl">自2005年起，<br>
                    一座開滿美好燈光的小酒館從城市繁忙的角落誕生，<br>
                    這裡是一個融合美食與美酒，以及和諧家庭氛圍的空間。<br>
                    開業以來，我們一直秉持著小咪的初衷，將每一位顧客視為家人般對待。<br>
                    這裡不只是一個餐酒館，更是一個記錄著人們幸福瞬間的地方。<br>感謝每一位顧客的支持與陪伴，<br>讓我們共同編織屬於這座小酒館的美好故事。</p>
            </div>
            <div id="rightContent" class="w-1/2 fadeInRight">
                <img src="../img/Inside the restaurant.jpg" alt="" class="w-full">
            </div>
        </section>

        <section class=" p-8 text-amber-950 mb-[3%]">
            <div class="flex justify-center items-center gap-4 mb-5">
                <div class="h-px w-20 border-b border-slate-500"></div>
                <div class="text-center leading-loose text-2xl font-black">
                    <p>客人總是在詢問</p>
                    <p>這麼好吃的秘訣是什麼</p>
                </div>
                <div class="h-px w-20 border-b border-slate-500"></div>
            </div>

            <div class="flex justify-evenly">
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5 ">
                    <div>
                        <img src=" ../img/feature-1.png" alt="" class="rounded-full">
                    </div>
                    <div class="text-2xl font-medium">台灣本土蔬菜</div>
                    <p class="text-lg">本店嚴選最新鮮的當季蔬菜，來自當地優質農田。每道料理都注重新鮮風味，以保留蔬菜的天然美味。我們致力於提供新鮮、營養豐富的蔬食饗宴，為您呈現最令人垂涎的美食體驗。</p>
                </div>
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5">
                    <div class="">
                        <img src="../img/feature-2.png" alt="" class="rounded-full ">
                    </div>
                    <div class="text-2xl font-medium">專業米其林廚師</div>
                    <p class="text-lg">
                        本店引進一流廚師，擁有豐富的國際經驗，精湛技藝糅合創新靈感。每位廚師都熱衷於用心製作獨特料理，以極致烹飪藝術呈現美味佳餚。品味本店獨特風格，感受廚師專業的烹調魔法。</p>
                </div>
                <div class="w-1/3 flex flex-col items-center gap-2 px-2.5 py-2.5">
                    <div class="">
                        <img src="../img/feature-3.png" alt="" class="rounded-full ">
                    </div>
                    <div class="text-2xl font-medium">對於專業不能退讓</div>
                    <p class="text-lg">
                        本店以專業烹飪藝術見稱，匠心獨具的廚師團隊擁有豐富國際經驗。我們致力於提供最新鮮的食材，結合獨特創新的料理手法，打造精緻口味。以嚴選食材、專業技術，為您呈現獨一無二的美食饗宴</p>
                </div>
            </div>
        </section>

        <section class="bg-amber-950 text-white flex justify-center gap-[5%] px-12 max-md:px-6 mb-[3%]">
            <div>
                <img src="../img/main_chef_brown.png" alt="" class="h-[100%]">
            </div>
            <div class="w-[500px] flex flex-col justify-center gap-3 ">
                <h1 class="text-2xl">創始主廚：帕金森，梅再帕</h1>
                <p class="text-lg">today chef:plum in shock</p>
                <p>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
                    vulputate. Etiam elit
                    elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,
                    ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam
                    eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec
                    sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum.
                    Donec congue lorem a molestie bibendum.</p>
            </div>
        </section>

        <section class="mb-[5%]">
            <div class="text-center leading-[4] text-3xl font-bold text-amber-950 ">料理精釀．工藝</div>
            <div class="relative">
                <video controls preload autoplay loop muted width="50%" class="mx-auto my-auto">
                    <source src="../img/cook-preview.mp4" type="video/mp4">
                </video>
                <div>
                    <img src="../img/bg-2.png" alt="" class="absolute h-full -right-6 bottom-[40%]">
                </div>
                <div>
                    <img src="../img/bg-3.png" alt="" class="absolute h-full top-[20%]">
                </div>

            </div>

        </section>

        <section id="popularSection" class="bg-[url('/img/bg-4.jpg')] h-[90vh] bg-center bg-cover relative ">
            <div class="w-full h-full bg-black opacity-40 text-white p-4 absolute"></div>
            <div id="menuContent" class=" text-white absolute top-[10%]">
                <div class="text-center mb-[2%]">
                    <h1 class="text-4xl leading-loose">人氣餐點</h1>
                    <p class="text-xl">歡樂聚餐就在這裡！我們提供各式主餐，涵蓋義大利麵、定食、排餐、各式小點等...<br>
                        除了葷食外也貼心提供素食用餐者專屬菜單，歡迎你們來品嚐分享喔！</p>
                </div>
                <div class="h-1/2 flex justify-center gap-6 ">
                    <img src="../img/popular-1.jpg" alt="" class="w-1/5 hover:scale-110 transition-all duration-700">
                    <img src="../img/popular-2.jpg" alt="" class="w-1/5 hover:scale-110 transition-all duration-700">
                    <img src="../img/popular-3.jpg" alt="" class="w-1/5 hover:scale-110 transition-all duration-700">
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
.fadeInLeft {
    opacity: 0;
    transform: translateX(-50%);

}

.fadeInRight {
    opacity: 0;
    transform: translateX(50%);
}

.show {
    opacity: 1;
    transform: translate(0%);
    transition: all 2s ease;
}

.animate__animated.animate__fadeInUpBig {
    --animate-duration: 3s;
    opacity: 1;
}

#menuContent {
    opacity: 0;
}
</style>
