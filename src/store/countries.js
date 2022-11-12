import axios from "axios";

const countries = {
  state: {
    list: [],
    searchResults: [],
    errors: null,
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.list = countries;
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results
    }
  },
  actions: {
    fetchAllCountries({ commit }) {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          commit("SET_COUNTRIES", response.data);
        })
        .catch((error) => {
          commit("SET_ERRORS", error);
        });
    },
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
  getters: {},
};

export default countries;
