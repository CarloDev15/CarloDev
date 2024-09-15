<template>
    <div class="container mx-auto max-w-screen-xl my-20 px-5 lg:px-20 flex">
        <div class="gap-10 mt-20 bg-white p-10 rounded-xl flex flex-col md:flex-row items-center">
            <div class="mb-7 sm:mb-0">
                <Suspense>
                    <AboutSection title="About Me API">
                        <p v-if="isFetching"
                            class="rounded-xl w-48 text-center text-headline text-xl font-bold font-share_tech">
                            Loading image...</p>

                        <template v-if="!error">
                            <img v-if="!isFetching" class="rounded-xl w-48" :src="data[0].image" alt="image about me">
                        </template>
                        <p v-else>{{ error }}></p>
                    </AboutSection>
                </Suspense>
            </div>
            <div class="w-full sm:w-3/4 text-justify text-4xl text-paragraph my-1 font-share_tech">
                <h1 class="text-headline text-3xl md:text-5xl font-bold font-share_tech py-5">About Me</h1>
                <p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">Vue is a
                    JavaScript framework for building user interfaces. It builds on top of
                    standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model
                    that helps you efficiently develop user interfaces, be they simple or complex. Vue is a framework
                    and ecosystem that covers most of the common features needed in frontend development. But the web is
                    extremely diverse - the things we build on the web may vary drastically in form and scale. With that
                    in mind, Vue is designed to be flexible and incrementally adoptable. In most build-tool-enabled Vue
                    projects, we author Vue components using an HTML-like file format called Single-File Component. 
                    A Vue SFC, as the name suggests, encapsulates the component's logic (JavaScript), template (HTML), 
                    and styles (CSS) in a single file.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue'
import useFetch from '../utils/fetch.js';

const { isFetching, data, error } = useFetch('https://thesimpsonsquoteapi.glitch.me/quotes')

</script>

<style scoped></style>