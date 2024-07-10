<script>

export default {
    name: "AppSelect",
    props: ['archetypes']
}
</script>

<template>
    <!-- select-->
    <select id="options"><!--onchange="mostrarOpcionSeleccionada()"-->
        <option v-for="archetype in archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    </select>
</template>

<style scoped>
select {
    margin-bottom: 1rem;
    border-radius: 5px;
    border: none;
}
</style>