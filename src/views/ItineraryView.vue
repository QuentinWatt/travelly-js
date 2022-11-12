<template>
  <div class="bg-white p-5 rounded">
    <h1 class="text-2xl font-bold">Your Travel List</h1>
    <div
      v-for="country in $store.state.itinerary.list"
      :key="country.name.official"
      class="my-5"
    >
      <country-list-item
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import CountryListItem from "@/components/CountryListItem.vue";

export default {
  name: "TravelList",
  components: { CountryListItem }
}
</script>
