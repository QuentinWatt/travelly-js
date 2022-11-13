import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/app.css";
import BaseIcon from "@/components/BaseIcon.vue";

createApp(App)
  .use(store)
  .use(router)
  .component('base-icon', BaseIcon)
  .mount("#app");
