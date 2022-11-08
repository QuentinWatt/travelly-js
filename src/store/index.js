import { createStore } from "vuex";
import countries from "@/store/countries";

export default createStore({
  modules: {
    countries,
  },
});
