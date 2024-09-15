<template>
    <div
        class="mx-auto sm:max-w-screen-md lg:max-w-screen-xl my-28 md:my-20 px-5 lg:px-20 flex flex-col md:flex-row justify-center md:justify-between items-center gap-10">
        <div class="w-full flex items-center flex-col md:items-start">
            <h1 class="text-2xl md:text-4xl text-headline my-1">
                <strong class="text-headline text-3xl md:text-6xl font-bold font-share_tech">HI, I'M CARLO</strong></h1>
            <p class="text-2xl md:text-4xl text-paragraph my-1 text-center md:text-left font-share_tech">A Web and
                Mobile Developer,
                with Design
                passion</p>
            <RouterLink :to="visit" class="bg-button outline-none px-12 py-4 rounded mt-3
                text-button-text text-xl font-medium font-share_tech hover:bg-button-text duration-500 hover:text-secondary">{{ btnName }}</RouterLink>
        </div>
        <div class="home">
            <img :src="imgsrc" alt="home-img" class="w-[1300px] mt-5">
        </div>
    </div>
    <div class="mt-10 sm:mt-20 bg-white shadow-sm">
        <div
            class="font-share_tech container max-w-screen-xl mx-auto py-20 block sm:flex sm:justify-around sm:items-center text-center">
            <div v-for="({numeric, description}, index) in incompetences " :key="index" class="mb-20 sm:mb-0">
                <span class="text-4xl font-bold text-headline mb-2">
                    {{numeric}}
                </span>
                <span class="block text-md text-headline">
                    {{ description }}
                </span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import incompetences from '../data/inCompetences.js';
const props = defineProps(['name', 'imgsrc', 'visit', 'btnName']);


</script>

<style scoped>
</style>