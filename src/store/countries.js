import axios from "axios";

const countries = {
  state: {
    list: [],
    errors: null,
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.list = countries;
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
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
  },
  getters: {},
};

export default countries;
