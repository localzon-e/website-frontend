import app from '@/createEntrypoint'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home'
import Contact from "@/views/Contact";

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
        }
    ],
    history: createWebHashHistory()
})

app.use(router)
