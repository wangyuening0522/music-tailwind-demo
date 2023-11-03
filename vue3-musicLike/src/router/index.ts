import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { Pages } from "./pages";

let routes = [
	{
        path: "/",
        name: "discover",
        component: () => import("../views/discover/Discover.vue"),
        meta: {
          menu: "discover",
          //??
          keepAlive: true,
        },
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
