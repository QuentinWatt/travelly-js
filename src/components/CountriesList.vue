<template>
  <div>
    <country-list-item
      v-for="country in getPageItems"
      :key="country.name.common"
      :country="country"
      class="mt-3"
    />
    <div class="mt-2 flex justify-between">
      <button
        @click="previousPage"
        :disabled="currentPage <= 0"
      >
        Prev
      </button>

      <button
        @click="nextPage"
      >
        Next
      </button>
    </div>

    Pages: {{ lastPageNumber }}
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CountryListItem from "@/components/CountryListItem.vue";

export default {
  name: "CountriesList",
  components: { CountryListItem },
  computed: {
    ...mapState('countries', [
      'currentPage',
    ]),
    ...mapGetters('countries',[
      'getPageItems',
      'lastPageNumber'
    ])
  },
  methods: {
    ...mapActions('countries', [
      "nextPage",
      "previousPage"
    ])
  }
};
</script>
