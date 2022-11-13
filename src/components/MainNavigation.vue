<template>
  <div class="h-16 flex items-center bg-blue-900 text-white">
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
          v-if="!isOpen"
          @click="openMenu"
          class="text-2xl"
        />
        <base-icon
          v-else
          @click="closeMenu"
          icon="fa-xmark"
          class="text-2xl"
        />
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "MainNavigation",
  computed: {
    ...mapState('mobileMenu',[
      'isOpen',
    ])
  },
  methods: {
    ...mapActions('mobileMenu',[
      'openMenu',
      'closeMenu'
    ])
  }
};
</script>
