import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export const constantRoutes=[
    {
        path:'/',
        name:'home',
        component:Home,
    },
]

const router = new Router({
    mode:'hash',
    routes:constantRoutes
})

export default router