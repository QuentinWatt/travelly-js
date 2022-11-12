<template>
  <div class="mt-2 flex justify-between">
    <button
      @click="$emit('pagePrev')"
      :disabled="currentPage <= 1"
      :class="{'text-blue-500' : currentPage > 1}"
    >
      Prev
    </button>

    <nav>
      <ul class="flex justify-between items-center">
        <li v-if="prevPageNumber >= 1">
          <a
            @click="$emit('pagePrev')"
            class="text-blue-500"
          >
            {{ prevPageNumber }}
          </a>
        </li>

        <li class="mx-3 text-gray-500">
          {{ currentPage }}
        </li>

        <li v-if="nextPageNumber <= lastPage">
          <a
            @click="$emit('pageNext')"
            class="text-blue-500"
          >
            {{ nextPageNumber }}
          </a>
        </li>
      </ul>
    </nav>

    <button
      @click="$emit('pageNext')"
      :class="{'text-blue-500' : nextPageNumber <= lastPage}"
    >
      Next
    </button>
  </div>
</template>

<script>
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
    prevPageNumber(){
      return this.currentPage - 1;
    },
    nextPageNumber(){
      return this.currentPage + 1;
    },
  }
};
</script>
