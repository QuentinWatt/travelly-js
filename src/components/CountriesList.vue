<template>
  <div>
    <country-list-item
      v-for="country in getPageItems"
      :key="country.name.common"
      :country="country"
      class="mt-3"
    />

    <list-pagination
      :currentPage="currentPage"
      :lastPage="lastPageNumber"
      @pageNext="nextPage"
      @pagePrev="previousPage"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CountryListItem from "@/components/CountryListItem.vue";
import ListPagination from "@/components/ListPagination.vue";

export default {
  name: "CountriesList",
  components: { ListPagination, CountryListItem },
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
      "previousPage",
    ])
  }
};
</script>
