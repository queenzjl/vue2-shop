// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload' //图片懒加载 插件
import VueInfiniteScroll from 'vue-infinite-scroll' //滚动翻页插件
import store from './store'
import axios from 'axios'

Vue.use(VueInfiniteScroll)
Vue.use(VueLazyLoad, {
    loading: 'static/loading-svg/loading-bars.svg',
    attempt: 3
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    mounted() {
        this.checkLogin();
        this.getCartCount();
    },
    methods: {
        checkLogin() {
            axios.get("users/checkLogin").then(res => {
                var res = res.data;
                if (res.status == "0") {
                    this.$store.commit("UPDATE_USERINFO", res.result);
                } else {
                    if (this.$route.path != "/goods") {
                        this.$router.push("/goods");
                    }
                }
            });
        },
        getCartCount() {
            axios.get("users/getCartCount").then(res => {
                var res = res.data;
                if (res.status == "0") {
                    this.$store.commit("UPDATE_CART_COUNT", res.result);
                }
            });
        }
    },
    components: { App },
    template: '<App/>'
})