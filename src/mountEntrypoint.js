import app from './createEntrypoint'
import './store/createVuex'
import './router/createRouter'
import './createi18n'
import '@/assets/font_awesome'

import fix_vul from '@/components/utility/fix_vulnerabilities'

import logo from '@/components/common/logo.vue'

/* navigation */
import register from '@/components/pagination/signIn/signIn.vue'
import get_location from '@/components/utility/get_location'
import search from '@/components/pagination/search/search.vue'
import search_item_location from "@/components/pagination/search/search_item_location";

app.component('fix_vul', fix_vul)

app.component('logo', logo)

/* navigation */
app.component('register', register)
app.component('get_location', get_location)
app.component('search', search)
app.component('search_item_location', search_item_location)

app.mount('#app')