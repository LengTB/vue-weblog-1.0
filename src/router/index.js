import Vue from 'vue'
import VueRouter from 'vue-router'

//初始化VueRouter
Vue.use(VueRouter)

//创建router对象

import Home from '@/views/home/Home.vue'
import About from '@/views/home/About.vue'
import Play from '@/views/home/Dome1.vue'

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
            path: '/play',
            component: Play
        },
        {
            path: '/login',
            component: () => import('@/views/home/Login.vue')
        },
        {
            path: '/register',
            component: () => import('@/views/home/Register.vue')
        },
        {
            path: '/console',
            component: () => import('@/views/home/Console.vue'),
            redirect: '/console/context',
            children: [
                {
                    path: 'context',
                    component: () => import('@/views/console/Context.vue')
                },
                // -------------------三级路由------------------------------
                {
                    path: 'context/news',
                    component: () => import('@/views/console/context/new.vue'),
                },
                {
                    path: 'context/label',
                    component: () => import('@/views/console/context/label.vue')
                },
                // ----------------------------------------------------------
                {
                    path: 'page',
                    component: () => import('@/views/console/Page.vue'),
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
            path: '/context',
            component: () => import('@/views/home/Context.vue'),
        },
        {
            path: '/other',
            component: () => import('@/views/other/Forgot.vue'),
            children: [
                {
                    path: "forgot",
                    component: () => import('@/views/other/Forgot.vue')
                }
            ]
        },
        {
            path: "*",
            component: () => import('@/views/other/Stop.vue')
        },
    ]
})

//导出router对象
export default router;