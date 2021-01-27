import app from '@/createEntrypoint'
import { createRouter, createWebHashHistory } from 'vue-router'

import Main from '@/views/Main'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Main'
        }
    ],
    history: createWebHashHistory()
})

app.use(router)
