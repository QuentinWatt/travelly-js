import axios from "axios";

const countries = {
  namespaced: true,
  state: {
    list: [],
    errors: null,
    currentPage: 1,
    perPage: 10,
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.list = countries;
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
    SET_PAGE_INDEX(state,{currentPage}){
      state.currentPage = currentPage
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
    nextPage({state, getters ,commit}){
      let currentPage = state.currentPage
      if(currentPage < getters.lastPageNumber){
        currentPage++
      }
      commit("SET_PAGE_INDEX", {
        currentPage
      })
    },
    previousPage({state, commit}){
      let currentPage = state.currentPage
      if(currentPage > 1){
        currentPage--
      }
      commit("SET_PAGE_INDEX", {
        currentPage
      })
    },
    setQuery({commit}, { page }){
      let currentPage = page ? page : 1
      commit("SET_PAGE_INDEX", {
        currentPage
      })
    },
  },
  getters: {
    getPageItems: (state) => {
      const start = (state.currentPage - 1) * state.perPage
      return state.list.slice(start, start + state.perPage)
    },
    lastPageNumber: (state) => {
      return state.list.length / state.perPage
    },
    nextPageNumber: (state) => {
      return Number(state.currentPage) + 1;
    },
    previousPageNumber: (state) => {
      const previousPage = Number(state.currentPage) - 1
      return !previousPage <= 0 ? previousPage : null;
    },
  },
};

export default countries;
