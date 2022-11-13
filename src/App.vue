<template>
  <div class="bg-gray-900 min-h-screen">
    <main-navigation />

    <mobile-menu>
      <main class="bg-gray-100">
          <div class="container mx-auto py-8">
            <router-view />
          </div>
      </main>
    </mobile-menu>

    <app-footer />
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";
import AppFooter from "@/components/AppFooter.vue";
import MobileMenu from "@/components/MobileMenu.vue";

export default {
  name: "App",
  components: { MobileMenu, AppFooter, MainNavigation },
  mounted() {
    this.$store.dispatch("countries/fetchAllCountries");
  },
};
</script>
