import axios from "axios";

const search = {
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
    searchCountry({commit}, country) {
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
          commit("SET_SEARCH_RESULTS", response.data)
        })
        .catch((error) => {
          commit("SET_ERRORS", error);
        })
    }
  },
  getters: {}
}

export default search
