<template>
  <div class="h-16 border-b flex items-center">
    <nav class="container mx-auto px-3 flex justify-between items-center">
      <div>
        <router-link
          to="/"
          class="text-4xl font-bold"
        >
          Travelly
        </router-link>
      </div>
      <div>
        <router-link to="/" class="mr-2">Countries</router-link>
        <router-link to="/travel-list">Travel List</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNavigation"
};
</script>
