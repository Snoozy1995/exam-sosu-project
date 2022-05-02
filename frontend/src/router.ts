import { createRouter, createWebHistory } from "vue-router";

const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: "/",
      name: "home",
      component: ChatView,
      meta: {
        requiresLogin: true,
      },
    },
    {
      path: "/createUser",
      name: "CreateUser",
      component: CreateUser,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/friends",
      name: "Friends",
      component: FriendsView,
      meta: {
        requiresLogin: true,
      },
    },*/
  ],
});

/*import { UserStore } from "../stores/userStore";
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresLogin)) {
    if (UserStore().userName.length <= 0) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});*/

export default Router;
