import axios from "axios";

const search = {
  namespaced: true,
  state:{
    results: [],
    errors: null,
  },
  mutations: {
    SET_SEARCH_RESULTS(state, results) {
      state.results = results
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
  },
  actions: {
    searchCountry({commit}, query) {
      commit("SET_ERRORS", null);
      axios
        .get(`https://restcountries.com/v3.1/name/${query}`)
        .then((response) => {
          commit("SET_SEARCH_RESULTS", response.data)
        })
        .catch((error) => {
          commit("SET_SEARCH_RESULTS", [])
          commit("SET_ERRORS", error);
        })
    },
    clearSearchResults({commit}){
      commit("SET_SEARCH_RESULTS", [])
    }
  },
  getters: {}
}

export default search
