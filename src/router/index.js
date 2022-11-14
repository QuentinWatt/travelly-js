import { createRouter, createWebHistory } from "vue-router";
import CountriesView from "../views/CountriesView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: CountriesView,
  },
  {
    path: "/travel-list",
    name: "travel-list",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ItineraryView.vue"),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async(to) => {
  if(to.name === 'home'){
    await store.dispatch('countries/setQuery', to.query)
  }
})

router.beforeResolve(async () => {
  await store.dispatch('mobileMenu/closeMenu')
});

export default router;
