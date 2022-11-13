<template>
  <div class="bg-gray-100 offcanvasWrapper">
    <div
      v-if="isOpen"
      @click="closeMenu"
      class="offcanvasMask"
    />

    <nav
      :class="{'isOpen': isOpen}"
      class="offcanvasMenu"
    >
      <ul class="w-full">
        <li
          v-for="(menuItem, index) in MENU_ITEMS"
          :key="index"
          class="w-full border-b"
        >
          <router-link
            :to="menuItem.path"
            class="block py-3 px-3"
          >
            {{ menuItem.label }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { menuItems } from '@/helpers/menuItems'

export default {
  name: "MobileMenu",
  created(){
    this.MENU_ITEMS = menuItems
  },
  computed:{
    ...mapState('mobileMenu', [
      'isOpen',
    ])
  },
  methods: {
    ...mapActions('mobileMenu',[
      'closeMenu'
    ])
  }
};
</script>

<style scoped>
  .offcanvasWrapper {
    position: relative;
    height: 100%;
    min-height: calc(100vh - 4rem - 4rem);
  }

  .offcanvasMask {
    transition: all 300ms;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  .offcanvasMenu {
    @apply bg-white border-r w-80;
    position: absolute;
    left: -100%;
    height: 100%;
    transition: all 300ms;
  }

  .offcanvasMenu.isOpen {
    left: 0;
  }
</style>
