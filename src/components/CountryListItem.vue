<template>
  <div
    @click="toggleDetails"
    class="border border-black rounded p-3 md:flex justify-between"
  >
    <div v-if="country">
      <span class="flex text-xl">
        <span class="font-bold mr-2">
          {{ country.name.common }}
        </span>
        <span>
          ({{ country.region }})
        </span>
      </span>

      <Transition>
        <div
          v-if="showDetails"
          class="w-full"
        >
          <div class="flex items-center">
        <span class="mr-3">
          Flag:
        </span>
            <span class="text-2xl">
          {{ country.flag }}
        </span>
          </div>
          <div class="flex items-center">
        <span class="mr-3">
          Subregion:
        </span>
            <span>
         {{ country.subregion }}
        </span>
          </div>
          <div class="flex items-center">
        <span class="mr-3">
          Co-ordinates:
        </span>
            <span>
         {{ country.latlng[0] }},{{ country.latlng[1] }}
        </span>
          </div>
        </div>
      </Transition>
    </div>

    <div class="mt-3 md:mt-0">
      <base-button
        v-if="!myList"
        @click.stop="addToList"
        :loading="loading"
        width="w-32"
      >
        Add to my list
      </base-button>
      <base-button
        v-if="myList"
        @click.stop="remove"
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
      loading: false,
      showDetails: false
    }
  },
  methods: {
    toggleDetails(){
      this.showDetails = !this.showDetails
    },
    addToList(){
      this.loading = true
      this.$store.dispatch('itinerary/AddCountry', this.country)

      // Only to fake some user interactivity
      setInterval(() => {
        this.loading = false
      }, 300)
    },
    remove(){
      this.loading = true
      this.$store.dispatch('itinerary/RemoveFromList', this.arrayIndex)

      // Only to fake some user interactivity
      setInterval(() => {
        this.loading = false
      }, 300)
    }
  }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 300ms ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-20px) scaleY(0);
}
</style>
