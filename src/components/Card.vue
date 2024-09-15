<template>
    <div>
        <img :src="img" :alt="title" class="rounded-t-xl border-none">
    </div>
    <div class="text-center px-4 py-6">
        <p class="font-bold text-xl mb-2 text-paragraph font-share_tech">{{ title }}</p>
        <span class="text-lg font-share_tech">{{ category }}</span>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'category', 'img'])
</script>

<style scoped>
</style>
