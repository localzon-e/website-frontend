import app from './createEntrypoint'
import './store/createVuex'
import './router/createRouter'
import './createi18n'
import '@/assets/font_awesome'

import search from '@/components/common/search.vue'
import get_location from '@/components/utility/get_location'

app.component('search', search)
app.component('get_location', get_location)

app.mount('#app')