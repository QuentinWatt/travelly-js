<template>
  <div class="mt-2 flex justify-between">
    <router-link
      :to="{name: 'home', query: { ...$route.query, page: previousPageNumber }}"
      :disabled="currentPage <= 1"
      :class="{'text-blue-500' : currentPage > 1}"
    >
      Prev
    </router-link>

    <nav>
      <ul class="flex justify-between items-center">
        <li v-if="previousPageNumber >= 1">
          <router-link
            :to="{name: 'home', query: { ...$route.query, page: previousPageNumber }}"
            class="text-blue-500"
          >
            {{ previousPageNumber }}
          </router-link>
        </li>

        <li class="mx-3 text-gray-500">
          {{ currentPage }}
        </li>

        <li v-if="nextPageNumber <= lastPage">
          <router-link
            :to="{name: 'home', query: { ...$router.query, page: nextPageNumber }}"
            class="text-blue-500"
          >
            {{ nextPageNumber }}
          </router-link>
        </li>
      </ul>
    </nav>

    <router-link
      :to="{name: 'home', query: { ...$router.query, page: nextPageNumber }}"
      :disabled="currentPage >= lastPageNumber"
      :class="{'text-blue-500' : nextPageNumber <= lastPage}"
    >
      Next
    </router-link>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListPagination",
  props:{
    lastPage: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  },
  computed: {
    ...mapGetters('countries',[
      'lastPageNumber',
      'nextPageNumber',
      'previousPageNumber'
    ])
  },
};
</script>
