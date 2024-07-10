import { reactive } from 'vue'

export const store = reactive({
    AppMain: [],
    apiURl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    // creo una variable donde guardar mi array de elementos
    Select:[],
    // guardo mi API en una variable Api Select
    apiSelect: "https://db.ygoprodeck.com/api/v7/archetypes.php"
}); 