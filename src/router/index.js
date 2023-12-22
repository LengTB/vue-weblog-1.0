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
            redirect: '/console/context',
            children:[
                {
                    path: 'context',
                    component: () => import('@/views/console/Context.vue')
                },
                {
                    path: 'page',
                    component: () => import('@/views/console/Page.vue')
                },
                {
                    path: 'comments',
                    component: () => import('@/views/console/Comments.vue')
                },
                {
                    path: 'annex',
                    component: () => import('@/views/console/Annex.vue')
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