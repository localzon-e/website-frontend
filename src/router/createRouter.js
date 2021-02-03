import app from '@/createEntrypoint'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/Home',
            component: Home,
            name: 'Home'
        }
    ],
    history: createWebHistory()
})

app.use(router)
