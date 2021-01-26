import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import Error404 from './pages/Error404'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '*',
        component: Error404,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router