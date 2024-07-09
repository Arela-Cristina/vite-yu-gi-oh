<script>
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
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppCards />
</template>
<!-- hemos quitado scope para importar todos nuestros files -->
<style  lang="scss"></style>
