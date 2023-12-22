import Vue from 'vue'
import VueRouter from 'vue-router'

//初始化VueRouter
Vue.use(VueRouter)

//创建router对象

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Play from '@/views/Dome1.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/play',
            component: Play
        },
        {
            path: '/console',
            component: () => import('@/views/Console.vue'),
            children:[
                {
                    path: 'Context',
                    component: () => import('@/views/console/Context.vue')
                },

            ]

        },
        {
            path: "*",
            component: () => import('@/views/Stop.vue')
        },
    ]
})

//导出router对象
export default router;