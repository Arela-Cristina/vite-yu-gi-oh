<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCards from './components/AppCards.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppCards
  
  }
}
</script>

<template>
   <AppHeader/>
   <AppMain/>
   <AppCards/>
  
</template>
<!-- hemos quitado scope para importar todos nuestros files -->
<style  lang="scss">

</style>
