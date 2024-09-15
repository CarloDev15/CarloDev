<template>
    <section class="about-section">
        <h1 class="text-headline text-3xl font-extrabold text-center my-20 font-share_tech">{{ character }}</h1>
        <slot />
    </section>
</template>

<script setup>
defineProps({
    character: String
})



</script>

<style scoped></style>