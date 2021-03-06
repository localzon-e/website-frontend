import app from '@/createEntrypoint.js'
import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
    state () {
        return {
            accessibility: false
        }
    },
    mutations: {
        toggleAccessibility (state) {
            state.accessibility = !state.accessibility
        }
    },
    getters: {
        getAccessibilityStatus: (state) => {
            return state.accessibility || false
        }
    }
})

app.use(store)