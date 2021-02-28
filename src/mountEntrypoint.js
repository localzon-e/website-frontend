import app from './createEntrypoint'
import './store/createVuex'
import './router/createRouter'
import './createi18n'
import '@/assets/font_awesome'

import register from '@/components/signIn/signIn.vue'
import get_location from '@/components/utility/get_location'
import fix_vul from '@/components/utility/fix_vulnerabilities'

/* search */
import search from '@/components/common/search/search.vue'
import search_item_location from "@/components/common/search/search_item_location";

app.component('register', register)
app.component('get_location', get_location)
app.component('fix_vul', fix_vul)

/* search */
app.component('search', search)
app.component('search_item_location', search_item_location)

app.mount('#app')