const UPDATE_USERINFO = 'UPDATE_USERINFO'
const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT'
export default {
    //更新用户信息
    [UPDATE_USERINFO](state, name) {
        state.nickName = name
    },
    //更新购物车信息
    [UPDATE_CART_COUNT](state, cartCount) {
        state.cartCount += cartCount;
    }
}