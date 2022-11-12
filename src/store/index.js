import { createStore } from "vuex";
import countries from "@/store/countries";
import itinerary from "@/store/itinerary"
import search from "@/store/search";

export default createStore({
  modules: {
    countries,
    search,
    itinerary,
  },
});
