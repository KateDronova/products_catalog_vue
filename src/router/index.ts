import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CatalogPage from "../views/CatalogPage.vue";
import ShoppingCardPage from "../views/CatalogPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "catalog",
    component: CatalogPage,
  },
  {
    path: "/shoppingcart",
    name: "shoppingCart",
    component: ShoppingCardPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
