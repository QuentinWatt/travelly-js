<template>
  <div class="bg-white p-5 rounded border">
    <h1 class="text-2xl font-bold">Your Travel List</h1>
    <div
      v-for="(country, index) in list"
      :key="country.name.common"
      class="my-5"
    >
      <country-list-item
        :country="country"
        :arrayIndex="index"
        :myList="true"
      />
    </div>
  </div>
</template>

<script>
import CountryListItem from "@/components/CountryListItem.vue";
import { mapState } from "vuex";

export default {
  name: "TravelList",
  components: { CountryListItem },
  computed:{
    ...mapState("itinerary",[
      "list"
    ])
  }
}
</script>
