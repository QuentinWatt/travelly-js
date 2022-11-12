<template>
  <div class="bg-white p-5 rounded">
    <h1 class="font-bold text-2xl">Countries</h1>
    <search-countries
      @showSearch="showSearchList"
      @hideSearch="hideSearchList"
    />
    <search-list
      v-if="useSearchList"
    />
    <countries-list
      v-else
    />
  </div>
</template>

<script>
import CountriesList from "@/components/CountriesList.vue";
import SearchCountries from "@/components/SearchCountries.vue";
import SearchList from "@/components/SearchList.vue";

export default {
  name: "CountriesView",
  components: { SearchList, SearchCountries, CountriesList },
  data(){
    return {
      useSearchList: false
    }
  },
  methods: {
    showSearchList(){
      this.useSearchList = true
    },
    hideSearchList(){
      this.useSearchList = false
    },
  }
};
</script>
