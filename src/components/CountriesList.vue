<template>
  <div>
    <country-list-item
      v-for="country in countries"
      :key="country.name.common"
      :country="country"
      class="mt-3"
    />
  </div>
</template>

<script>
import CountryListItem from "@/components/CountryListItem.vue";

export default {
  name: "CountriesList",
  components: { CountryListItem },
  computed: {
    countries() {
      return this.$store.state.countries.list;
    },
  },
};
</script>
