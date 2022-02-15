import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/account",
    name: "Account",
    
    component: () =>
      import( "../views/Account.vue"),
  },
  {
    path: "/submitdata",
    name: "SubmitData",
    
    component: () =>
      import( "../views/SubmitData.vue"),
  },
  {
    path: "/login",
    name: "Login",
    
    component: () =>
      import( "../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    
    component: () =>
      import( "../views/Signup.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    
    component: () => import( "../views/404.vue"),
  },

  {
    path: "/genedetails",
    name: "GeneDetails",
    
    component: () => import( "../views/GeneDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
