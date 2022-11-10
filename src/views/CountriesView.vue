<template>
  <div class="bg-white p-5 rounded">
    <h1 class="font-bold text-2xl">Countries</h1>
    <countries-list />
  </div>
</template>

<script>
import CountriesList from "@/components/CountriesList.vue";

export default {
  name: "CountriesView",
  components: { CountriesList },
  mounted() {
    this.$store.dispatch("fetchAllCountries");
  },
};
</script>
