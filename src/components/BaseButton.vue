<template>
  <button
    :class="[bgColor, textColor, width]"
    class="rounded flex items-center justify-center py-2 px-3"
  >
    <base-loader
      v-if="loading"
    />
    <slot
      v-else
    />
  </button>
</template>

<script>
import BaseLoader from "@/components/BaseLoader.vue";

export default {
  name: "BaseButton",
  components: { BaseLoader },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: 'bg-blue-500'
    },
    textColor: {
      type: String,
      default: 'text-white'
    },
    width:{
      type: String,
      default: 'w-auto'
    }
  }
};
</script>
