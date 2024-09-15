<template>
    <div>
        <Section :imgsrc="home" :visit="'/projects'" :btnName="'Get Started'"></Section>
    </div>
</template>

<script setup>
import Section from '../components/Section.vue'
import home from '../images/dev.svg'


</script>

<style scoped>

</style>
