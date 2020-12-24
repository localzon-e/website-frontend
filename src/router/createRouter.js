import app from '@/createEntrypoint'
import { createRouter, createWebHashHistory } from 'vue-router'

import main from '@/views/main'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: main,
            name: 'main'
        }
    ],
    history: createWebHashHistory()
})

app.use(router)
