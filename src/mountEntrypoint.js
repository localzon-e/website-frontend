import app from './createEntrypoint'
import './store/createVuex'
import './router/createRouter'
import '@/assets/font_awesome'

import search from '@/components/common/search.vue'

app.component('search', search)

app.mount('#app')