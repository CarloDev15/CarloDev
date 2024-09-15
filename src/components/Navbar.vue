<template>
    <header
        class="flex justify-between items-center shadow-md h-[80px] px-5 lg:px-24 fixed w-[100%] top-0 z-10 bg-background backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200">
        <div class="text-3xl font text-headline md:hover:text-slate-700 cursor-pointer">
            <RouterLink to="/">
                <div class="flex items-center">
                    <svg viewBox="0 0 26 26" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                        xmlns:serif="http://www.serif.com/"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                        class="w-10 h-10 mr-2">
                        <g id="Icon">
                            <path
                                d="M22.75,6c0,-1.26 -0.5,-2.468 -1.391,-3.359c-0.891,-0.891 -2.099,-1.391 -3.359,-1.391l-12,0c-1.26,-0 -2.468,0.5 -3.359,1.391c-0.891,0.891 -1.391,2.099 -1.391,3.359l-0,12c-0,1.26 0.5,2.468 1.391,3.359c0.891,0.891 2.099,1.391 3.359,1.391l12,0c1.26,0 2.468,-0.5 3.359,-1.391c0.891,-0.891 1.391,-2.099 1.391,-3.359l-0,-12Zm-10.262,2.163l-2.4,7.2c-0.13,0.393 0.082,0.818 0.475,0.949c0.393,0.13 0.818,-0.082 0.949,-0.475l2.4,-7.2c0.13,-0.393 -0.082,-0.818 -0.475,-0.949c-0.393,-0.13 -0.818,0.082 -0.949,0.475Zm2.582,1.967l1.869,1.87c0,-0 -1.869,1.87 -1.869,1.87c-0.293,0.292 -0.293,0.768 -0,1.06c0.292,0.293 0.768,0.293 1.06,0l2.4,-2.4c0.293,-0.293 0.293,-0.767 0,-1.06l-2.4,-2.4c-0.292,-0.293 -0.768,-0.293 -1.06,-0c-0.293,0.292 -0.293,0.768 -0,1.06Zm-7.2,-1.06l-2.4,2.4c-0.293,0.293 -0.293,0.767 -0,1.06l2.4,2.4c0.292,0.293 0.768,0.293 1.06,0c0.293,-0.292 0.293,-0.768 0,-1.06l-1.869,-1.87c-0,0 1.869,-1.87 1.869,-1.87c0.293,-0.292 0.293,-0.768 0,-1.06c-0.292,-0.293 -0.768,-0.293 -1.06,-0Z">
                            </path>
                        </g>
                    </svg>


                    <h3 class="font-medium font-share_tech">CARLODEV</h3>
                </div>
            </RouterLink>
        </div>
        <nav class="flex flex-col md:flex-row items-center p-5 gap-4 md:gap-10 px-6 md:static absolute bg-background shadow-md md:shadow-none md:bg-transparent md:w-auto md:my-0 left-0 w-full duration-500"
            :class="[open ? 'top-0' : 'top-[-400px]']">
            <RouterLink v-for="({ path, name }, index) in routes" :key="index" :to="path" activeClass="active"
                class=" text-headline md:hover:text-slate-700 py-1 text-2xl font-medium font-share_tech navibar-link"
                @click="closeMenu">
                {{ name[0].toUpperCase() + name.substring(1, name.length) }}
                <div class="navibar-link-underline"></div>
            </RouterLink>
        </nav>
        <div class="text-4xl text-headline cursor-pointer md:hidden z-20" @click="menuOpen">
            <div v-if="open" v-html="iconX"></div>
            <div v-else v-html="iconList"></div>
        </div>
    </header>
</template>


<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { routes } from '../router/index.js'

const open = ref(false)

const menuOpen = () => {
    open.value = !open.value
}

const closeMenu = () => {
    open.value = false
}

const iconX = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>`

const iconList = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>`


</script>



<style scoped>
.active {
    font-weight: bold;
    color: #ffd803;
}

/* pseudo-class link navbar */
.navibar-link {
    position: relative;
}
.navibar-link-underline {
    content: '';
    width: 0;
    height: 2px;
    background: #ffd803;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    transition: 0.3s;
}

.navibar-link:hover {
    color: #ffd803;
    transition: 0.2s;
}

.navibar-link:hover .navibar-link-underline {
    width: 55%;
}

</style>