import Welcome from "./components/views/Welcome.vue";
import Home from "./components/views/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/", component: Welcome },
  { path: "/home", component: Home },
  { path: "/favoritos", component: Home },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
