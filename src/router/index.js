import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/view/GoodList'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'GoodList',
        component: GoodList

    }]
})