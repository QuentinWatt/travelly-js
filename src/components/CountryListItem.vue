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
        v-if="!myList"
        @click="addToList"
        class="rounded bg-blue-500 text-white flex items-center justify-center h-8 w-8"
      >
        +
      </button>
      <button
        v-if="myList"
        @click="remove"
        class="rounded bg-red-500 text-white flex items-center justify-center h-8 w-8"
      >
        -
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
    },
    myList: {
      type: Boolean,
      default: false,
    },
    arrayIndex:{
      type: Number,
      default: null,
    }
  },
  methods: {
    addToList(){
      this.$store.dispatch('itinerary/AddCountry', this.country)
    },
    remove(){
      this.$store.dispatch('itinerary/RemoveFromList', this.arrayIndex)
    }
  }
};
</script>
