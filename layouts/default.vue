<template>
    <div>
        <header>
            <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
            <NuxtLink :to="{ name: 'about' }" style="margin-left: 10px">About</NuxtLink>
        </header>
        <slot />
        <footer></footer>
    </div>
</template>
