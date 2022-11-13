<template>
  <div class="h-16 border-b flex items-center bg-blue-900 text-white">
    <nav class="container mx-auto px-3 flex justify-between items-center">
      <div>
        <router-link
          to="/"
          class="text-4xl font-bold"
        >
          Travelly
        </router-link>
      </div>
      <div class="flex items-center">
        <base-icon
          class="text-2xl md:hidden"
        />
        <ul class="hidden md:flex items-center w-full">
          <li>
            <router-link to="/" class="mr-2">Countries</router-link>
          </li>
          <li>
            <router-link to="/travel-list">Travel List</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNavigation"
};
</script>
