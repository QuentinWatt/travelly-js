<template>
  <form @submit.prevent="doSearch" class="flex w-full">
    <input
      type="text"
      v-model="query"
      class="border py-2 px-3 rounded bg-white w-full mr-3"
      @focus="toggleList"
      @blur="toggleList"
    >
    <button
      type="submit"
      class="px-3 rounded bg-blue-400 text-white"
    >
      Search
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchCountries",
  data() {
    return {
      query: ''
    }
  },
  methods:{
    doSearch(){
      this.$store.dispatch("searchCountry", this.query)
    },
    toggleList(){
      if(this.query.length > 0){
        this.$emit('showSearch')
      }
      else {
        this.$emit('hideSearch')
      }
    }
  }
};
</script>
