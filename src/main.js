// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload' //图片懒加载 插件
import VueInfiniteScroll from 'vue-infinite-scroll' //滚动翻页插件
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueInfiniteScroll)
Vue.use(VueLazyLoad, {
    loading: 'static/loading-svg/loading-bars.svg',
    attempt: 3
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})