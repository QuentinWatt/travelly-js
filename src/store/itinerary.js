const itinerary = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    SET_ITINERARY(state, newList){
      state.list = newList
    },
  },
  actions: {
    AddCountry({ state, commit }, country){
      let list = state.list
      list.push(country)
      commit('SET_ITINERARY', list)
    },
    RemoveFromList({ state, commit }, index){
      let list = state.list
      list.splice(index, 1)
      commit('SET_ITINERARY', state.list)
    }
  },
  getters: {},
}

export default itinerary
