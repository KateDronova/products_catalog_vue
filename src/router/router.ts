import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CatalogPage from "@/views/CatalogPage.vue";
import ShoppingCartPage from "@/views/ShoppingCartPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "catalog",
    component: CatalogPage,
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: ShoppingCartPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
