import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HelloWorld.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: HomePage,
      path: "/",
    },
  ],
});

export default router
