<template>
    <div class="bg-white">
        <div class="container mx-auto">
            <div class="pt-20 sm:pt-30 mt-20">
                <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
                    <p class="text-3xl md:text-5xl font-bold font-share_tech text-headline mb-4">
                        Follow me
                    </p>
                    <div class="flex gap-4 sm:gap-8">
                        <a class="text-4xl text-headline hover:bg-button cursor-pointer rounded-lg shadow-sm p-4 duration-700"
                            v-for="({ name, icon, url }, index) in socialLinks" :key="index" :href="url"
                            target="_blank">
                            <img :src="icon" :alt="name" class="w-10 h-10">
                            </img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center text-center pb-10">
            <p class="text-2xl text-headline font-share_tech">© 2024. Developed by <span class="font-bold">Carlo Caruso</span></p>
        </div>
    </div>
</template>

<script>
import socialLinks from '../data/socialLinks.js';

export default {
    data() {
        return {
            socialLinks: socialLinks
        };
    },
};


</script>

<style scoped>
</style>