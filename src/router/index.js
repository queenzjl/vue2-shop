import Vue from 'vue'
import Router from 'vue-router'
const GoodList = r => require.ensure([], () => r(require('../view/GoodList')), 'GoodList')
const Cart = r => require.ensure([], () => r(require('../view/Cart')), 'Cart')
const Address = r => require.ensure([], () => r(require('../view/Address')), 'Address')
const OrderConfirm = r => require.ensure([], () => r(require('../view/OrderConfirm')), 'OrderConfirm')
const OrderSuccess = r => require.ensure([], () => r(require('../view/OrderSuccess')), 'OrderSuccess')

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'GoodList',
            component: GoodList
        },
        {
            path: '/goods',
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