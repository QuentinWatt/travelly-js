<template>
  <div>
    <country-list-item
      v-for="country in results"
      :key="country.name.common"
      :country="country"
      class="mt-3"
    />

    <div
      v-if="errors"
      class="mt-3 flex justify-center"
    >
      <div class="p-3 bg-gray-100 rounded">
        No matching results. Please try again.
      </div>
    </div>
  </div>
</template>

<script>
import CountryListItem from "@/components/CountryListItem.vue";
import { mapState } from "vuex";

export default {
  name: "SearchList",
  components: { CountryListItem },
  computed:{
    ...mapState('search',[
      'results',
      'errors',
    ])
  }
};
</script>
