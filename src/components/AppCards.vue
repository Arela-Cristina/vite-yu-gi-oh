<script>

export default {
    name: "AppCards",
    props: ['info'],
}
</script>

<template>
    <div class="card">
        <img :src="info.card_images[0].image_url" :alt="info.desc">
        <div>{{ info.name }}</div>
        <div>{{ info.archetype }}</div>
    </div>
</template>

<style scoped>
/* debug */
.card {
    background-color: coral;
    text-align: center;
    width: calc(100% / 5 - 1rem);
}

img {
    width: 100%;
}
</style>