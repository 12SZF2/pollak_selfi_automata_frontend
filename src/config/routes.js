import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/szerkeszto",
      name: "Szerkeszto",
      component: () => import("../pages/Szerkeszto.vue"),
    },
    {
      path:"/elkuldes",
      name: "Elkuldes",
      component: () => import("../pages/Elkuldes.vue"),
    }
  ],
});

export default router;
