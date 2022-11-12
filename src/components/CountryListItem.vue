<template>
  <div class="border border-black rounded p-3 flex justify-between items-center">
    <div v-if="country">
      <span class="font-bold text mr-2">
        {{ country.name.common }}
      </span>
      <span>
        {{ country.region }}
      </span>
    </div>
    <div>
      <button
        @click="addToList"
        class="rounded bg-black text-yellow-300 flex items-center justify-center h-8 w-8"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryListItem",
  props: {
    country: {
      type: Object,
      default: null,
    },
  },
  methods: {
    addToList(){
      this.$store.dispatch('AddCountry', this.country)
    }
  }
};
</script>
