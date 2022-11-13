<template>
  <form @submit.prevent class="flex w-full">
    <input
      type="text"
      v-model="query"
      class="border py-2 px-3 rounded bg-white w-full"
      @focus="handleSearchResults"
      @blur="handleSearchResults"
      @keyup="handleSearch"
      placeholder="Search for a country..."
    >
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchCountries",
  data() {
    return {
      query: "",
    }
  },
  methods:{
    ...mapActions("search",[
      "clearSearchResults",
      "searchCountry"
    ]),
    handleSearch(){
      if(this.query.length > 2){
        this.$emit("showSearch")
        this.searchCountry(this.query)
      }
      else{
        this.$emit("hideSearch")
      }
    },
    handleSearchResults(){
      if(!this.query.length >= 2){
        this.clearSearchResults()
      }
    }
  }
};
</script>
