<template>
    <main-navigation />
  <div class="bg-gray-100">
    <div class="container mx-auto py-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";

export default {
  name: "App",
  components: { MainNavigation }
};
</script>
