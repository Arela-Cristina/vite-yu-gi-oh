<script>
import AppCards from './AppCards.vue'

// import store
import { store } from '../store'; //sportiamo store

export default {
    name: 'AppMain',
    components: {
        AppCards
    },
    data() { // esportiamo anche qui la data di store per penderci gli elemti che ci interessano
        return {
            store,
        }
    },
}

</script>

<template>
    <div class="boxCards">
        <AppCards v-for="card in store.AppMain" :key="card.id" :info="card"/>
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