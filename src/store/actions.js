export default {
    updateInfo({ commit, state }, userName) {
        commit('UPDATE_USERINFO', userName);
    },
    updateCartCount({ commit, state }, cartCount) {
        commit('UPDATE_CART_COUNT', cartCount);
    }
}