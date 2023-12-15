export default defineNuxtRouteMiddleware(
    // 會拿到兩個參數，to 和 from 的路由物件
    (to, from) => {
        // if (to.path === "/about") {
        //     console.log("我觸發了");
        //     return navigateTo("/about/aboutA");
        // }
        // 要取消導航就 return abortNavigation()
        // 要轉址就 return navigateTo(...)
    }
);
