import Vue from 'vue'
import VueRouter from 'vue-router'

//初始化VueRouter
Vue.use(VueRouter)

//创建router对象

import MyHome from '@/views/MyHome.vue'
import MyLogin from '@/views/MyAdmin.vue'
import MyAbout from '@/views/MyAbout'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MyHome
        },
        {
            path: '/about',
            component: MyAbout
        },
        {
            path: '/login',
            component: MyLogin
        },
        {
            path: '/music',
            component: () => import('@/views/MyMusic.vue')
        },
        {
            path: '/test',
            component: () => import('@/views/Test.vue')
        }
    ]
})

//导出router对象
export default router;