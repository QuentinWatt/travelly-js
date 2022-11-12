<template>
  <div class="bg-white p-5 rounded">
    <h1 class="font-bold text-2xl">Countries</h1>
    <search-countries
      @focus="hideList"
      @blur="showList"
    />
    <countries-list v-if="showCountriesList" />
  </div>
</template>

<script>
import CountriesList from "@/components/CountriesList.vue";
import SearchCountries from "@/components/SearchCountries.vue";

export default {
  name: "CountriesView",
  components: { SearchCountries, CountriesList },
  data(){
    return {
      showCountriesList: true
    }
  },
  mounted() {
    this.$store.dispatch("fetchAllCountries");
  },
  methods: {
    hideList(){
      this.showCountriesList = false
    },
    showList(){
      this.showCountriesList = true
    }
  }
};
</script>
