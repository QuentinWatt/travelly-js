<template>
  <div class="bg-gray-900 min-h-screen">
    <main-navigation />

    <main class="bg-gray-100">
      <div class="container mx-auto py-8">
        <router-view />
      </div>
    </main>

    <app-footer />
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: { AppFooter, MainNavigation },
  mounted() {
    this.$store.dispatch("countries/fetchAllCountries");
  }
};
</script>
