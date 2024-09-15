<template>
    <div class="container sm:max-w-screen-md lg:max-w-screen-xl mx-auto px-5 xl:px-24 my-40">
        <div class="text">
            <h1 class="text-headline text-5xl font-extrabold text-center my-20 font-share_tech">Projects Portfolio</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
            <div v-for="project in projects" :key="project.id" :project="project"
                class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white hover:-translate-y-1 hover:scale-101 duration-300">
                <Card :img="project.img" :title="project.title" :category="project.category" />
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from '../data/projectsArr.js'
import Card from '../components/Card.vue'


</script>

<style scoped></style>