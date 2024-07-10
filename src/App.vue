<script>
//importiamo axios
import axios from 'axios';

//importiamo i componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCards from './components/AppCards.vue'
import AppSelect from './components/AppSelect.vue'

// importiamo il nostro store
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
    AppCards,
    AppSelect
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
          // console.log(result.data.data[0]);
          store.AppMain = result.data.data;
        })
    },
    getArchetypes() {
      axios.
        get(store.apiSelect)
        .then(result => {
          // console.log(result.data);
          store.Select = result.data;

        })
      // .catch(err => {
      //       console.log(err);
      //     })
    }
  },
  created() {
    this.getCards();
    this.getArchetypes();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>
<!-- hemos quitado scope para importar todos nuestros files -->
<style  lang="scss"></style>
