<template>
  <div class="home">
    <h1 class="font-bold text-3xl">Countries</h1>
    <countries-list />
  </div>
</template>

<script>
import CountriesList from "@/components/CountriesList.vue";

export default {
  name: "CountriesView",
  components: { CountriesList },
  mounted() {
    console.log(this.$store.dispatch("fetchAllCountries"));
  },
};
</script>
