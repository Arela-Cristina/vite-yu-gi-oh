<script>
import AppCards from './AppCards.vue'

export default {
    name: 'AppMain',
    components: {
        AppCards
    }
}

</script>

<template>
    <div>
        <div class="boxCards">
            <AppCards />
            <!-- <AppCards />
            <AppCards />
            <AppCards />
            <AppCards />
            <AppCards />
            <AppCards /> -->
        </div>
    </div>
</template>

<style scoped>
.boxCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>