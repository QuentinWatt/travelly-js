import { createRouter, createWebHistory } from "vue-router";
import CountriesView from "../views/CountriesView.vue";

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
      import(/* webpackChunkName: "about" */ "../views/TravelList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
