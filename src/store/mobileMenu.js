const mobileMenu = {
  namespaced: true,
  state: {
    isOpen: false,
  },
  mutations: {
    SET_MENU_STATE(state, menuState){
      state.isOpen = menuState
    }
  },
  actions: {
    openMenu({commit}){
      commit('SET_MENU_STATE', true)
    },
    closeMenu({commit}){
      commit('SET_MENU_STATE', false)
    },
  },
  getters:{}
}

export default mobileMenu
