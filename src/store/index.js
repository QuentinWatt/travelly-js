import { createStore } from "vuex";
import countries from "@/store/countries";
import itinerary from "@/store/itinerary"

export default createStore({
  modules: {
    countries,
    itinerary,
  },
});
