<script>

export default {
    name: "AppCards",
}
</script>

<template>
    <div class="card">
        <img src="https://i.pinimg.com/736x/0b/3a/35/0b3a3535fce27a486d8b6b9b22144fe5.jpg" alt="drago dorato">
        <div>Nome Carta</div>
        <div>Tipo Carta</div>
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