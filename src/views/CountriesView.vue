<template>
  <div class="bg-white p-5 rounded">
    <h1 class="font-bold text-2xl">Countries</h1>
    <search-countries
      @showSearch="showSearchList"
      @hideSearch="hideSearchList"
    />
    <countries-list
      v-if="useSearchList"
      :countries="$store.state.search.results"
    />
    <countries-list
      v-else
      :countries="$store.state.countries.list"
    />
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
      useSearchList: false
    }
  },
  mounted() {
    this.$store.dispatch("fetchAllCountries");
  },
  methods: {
    toggleSearchList(){
      this.useSearchList = !this.useSearchList
    },
    showSearchList(){
      this.useSearchList = true
    },
    hideSearchList(){
      this.useSearchList = false
    },
  }
};
</script>
