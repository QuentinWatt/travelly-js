<template>
  <div class="mt-2 flex justify-between">
    <span>
      <router-link
        v-if="previousPageNumber"
        :to="{name: 'home', query: { ...$route.query, page: previousPageNumber }}"
        :disabled="currentPage <= 1"
        class="text-blue-500"
      >
        Prev
      </router-link>
    </span>

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

        <li v-if="nextPageNumber">
          <router-link
            :to="{name: 'home', query: { ...$route.query, page: nextPageNumber }}"
            class="text-blue-500"
          >
            {{ nextPageNumber }}
          </router-link>
        </li>
      </ul>
    </nav>

    <span>
      <router-link
        v-if="nextPageNumber"
        :to="{name: 'home', query: { ...$route.query, page: nextPageNumber }}"
        :disabled="nextPageNumber <= lastPageNumber"
        class="text-blue-500"
      >
        Next
      </router-link>
    </span>

  </div>
</template>

<script>
export default {
  name: "ListPagination",
  props:{
    lastPageNumber: {
      type: Number,
    },
    nextPageNumber: {
      type: Number,
    },
    previousPageNumber: {
      type: Number,
    },
    currentPage: {
      type: Number,
    }
  },
};
</script>
