import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/view/GoodList'
import Cart from '@/view/Cart'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'GoodList',
            component: GoodList
        },
        {
            path: '/goodList',
            name: 'GoodList',
            component: GoodList
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        }
    ]
})