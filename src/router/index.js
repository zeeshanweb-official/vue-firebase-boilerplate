import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Register from "@/views/auth/Register.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      auth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      auth: false,
    },
  },
  ,
  {
    path: "/signin",
    name: "signin",
    component: Home,
    meta: {
      auth: false,
    },
  },
  ,
  {
    path: "/forget-password",
    name: "forgetPassword",
    component: Home,
    meta: {
      auth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
