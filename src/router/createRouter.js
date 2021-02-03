import app from '@/createEntrypoint'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import Contact from '@/views/Contact'

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
        },
        {
            path: '/Contact',
            component: Contact,
            name: 'Contact'
        },
    ],
    history: createWebHistory()
})

app.use(router)
