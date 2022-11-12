<template>
  <div>
    <country-list-item
      v-for="country in results"
      :key="country.name.common"
      :country="country"
      class="mt-3"
    />
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
      'results'
    ])
  }
};
</script>
