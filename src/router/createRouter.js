import app from '@/createEntrypoint'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home'
import Contact from "@/views/Contact";
import PageNotFound from "@/views/404";

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/Contact',
            component: Contact,
            name: 'Contact'
        },
        {
            path: '/:pathMatch(.*)*',
            component: PageNotFound,
            name: 'PageNotFound'
        },
    ],
    history: createWebHashHistory()
})

app.use(router)
