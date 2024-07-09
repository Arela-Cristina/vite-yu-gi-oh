<script>
//importiamo axios
import axios from 'axios';

//importiamo i componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCards from './components/AppCards.vue'

// importiamo il nostro store
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
    AppCards
  },
  data() { // li diciamo di farci tornare la struttura dati
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios.
        get(store.apiURl)
        .then(result => {
          console.log(result.data.data[0].name);
          store.AppCards = result.data.data;
        })
        // .catch(err => {
        //   console.log(err);
        // })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppCards />
</template>
<!-- hemos quitado scope para importar todos nuestros files -->
<style  lang="scss"></style>
