import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/view/GoodList'
import Cart from '@/view/Cart'
import Address from '@/view/Address'
import OrderConfirm from '@/view/OrderConfirm'
import OrderSuccess from '@/view/OrderSuccess'

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
        },
        {
            path: '/address',
            name: 'Address',
            component: Address
        },
        {
            path: '/orderConfirm',
            name: 'OrderConfirm',
            component: OrderConfirm
        },
        {
            path: '/orderSuccess',
            name: 'OrderSuccess',
            component: OrderSuccess
        }
    ]
})