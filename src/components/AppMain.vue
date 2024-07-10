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
    <section>
        <!-- bottone -->
        <select id="options"><!--onchange="mostrarOpcionSeleccionada()"-->
            <option value="option1"></option>
            <option value="option2">Noble Knight</option>
            <option value="option3">Alien</option>
        </select>

        <div class="cardsFound">Found tot cards</div>
        <!-- boxCards -->
        <div class="boxCards">
            <AppCards v-for="card in store.AppMain" :key="card.id" :info="card" />
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: rgb(226, 185, 52);
    padding: 3rem 3rem;
}

select {
    margin-bottom: 1rem;
    border-radius: 5px;
    border: none;
}

.cardsFound {
    color:white;
    background-color: rgb(34, 34, 34);
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    padding: 5px 5px;
}

.boxCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: rgb(255, 255, 255);
    padding: 3rem 3rem;
}
</style>