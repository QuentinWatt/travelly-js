<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="bg-yellow-300">
    <div class="container mx-auto py-8">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
