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
      <base-button
        v-if="!myList"
        @click="addToList"
        :loading="loading"
        width="w-32"
      >
        Add to my list
      </base-button>
      <base-button
        v-if="myList"
        @click="remove"
        :loading="loading"
        bg-color="bg-red-500"
        width="w-32"
      >
        Remove
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "CountryListItem",
  components: { BaseButton },
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
  data(){
    return {
      loading: false
    }
  },
  methods: {
    addToList(){
      this.loading = true
      this.$store.dispatch('itinerary/AddCountry', this.country)

      setInterval(() => {
        this.loading = false
      }, 300)
    },
    remove(){
      this.loading = true
      this.$store.dispatch('itinerary/RemoveFromList', this.arrayIndex)

      setInterval(() => {
        this.loading = false
      }, 300)
    }
  }
};
</script>
