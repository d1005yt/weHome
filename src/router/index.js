import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import List from '@/pages/List'
import SMS from '@/pages/SMS'

Vue.use(Router)

export const constantRoutes=[
    {
        path:'/',
        name:'home',
        component:Home,
    },
    {
        path:'/list',
        name:'list',
        component:List,
    },
    {
        path:'/sms',
        name:'sms',
        component:SMS,
    },
]

const router = new Router({
    mode:'hash',
    routes:constantRoutes
})

export default router