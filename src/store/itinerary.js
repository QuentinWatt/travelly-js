const itinerary = {
  state: {
    list: [],
  },
  mutations: {
    ADD_COUNTRY(state, country){
      state.list.push(country);
    },
  },
  actions: {
    AddCountry({ commit }, country){
      commit('ADD_COUNTRY', country)
    }
  },
  getters: {},
}

export default itinerary
