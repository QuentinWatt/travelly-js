<template>
  <div class="border border-black rounded p-3 flex justify-between items-center">
    <div>
      <span class="font-bold text mr-2">
        {{ name }}
      </span>
      <span>
        {{ region }}
      </span>
    </div>
    <div>
      <button
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
    name: {
      type: String,
      default: "",
    },
    region: {
      type: String,
      default: "",
    }
  },
};
</script>
