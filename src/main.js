import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import store from "./components/storage/index";
import router from "./router";

createApp(App).use(router).use(store).mount("#app");
