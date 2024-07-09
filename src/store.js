import { reactive } from 'vue'

export const store = reactive({
    AppCards: [],
    apiURl: " https://db.ygoprodeck.com/api/v7/cardinfo.php"
});