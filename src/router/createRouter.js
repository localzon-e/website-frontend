import app from '@/createEntrypoint'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/Contact',
            component: () => import(/* webpackChunkName: "Contact" */ '@/views/Contact'),
            name: 'Contact'
        },
        {
            path: '/Imprint',
            component: () => import(/* webpackChunkName: "Imprint" */ '@/views/Imprint'),
            name: 'Imprint'
        },
        {
            path: '/SignIn',
            component: () => import(/* webpackChunkName: "SignIn" */ '@/views/SignIn'),
            name: 'SignIn'
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import(/* webpackChunkName: "404" */ '@/views/404'),
            name: 'PageNotFound'
        },
    ],
    history: createWebHashHistory()
})

app.use(router)
