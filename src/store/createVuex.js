import app from '@/createEntrypoint.js'
import { createStore } from 'vuex'

const vendors = require('@/assets/example_data_vendors.json')
const articles = require('@/assets/example_data_articles.json')

// Create a new store instance.
const store = createStore({
    state () {
        return {
            vendors,
            articles
        }
    },
    getters: {
        getAllArticles: (state) => {
            return Object.values(state.articles).flat()
        }
    }
})

app.use(store)