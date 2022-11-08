<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="justify-center flex bg-yellow-300 items-center h-screen">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
