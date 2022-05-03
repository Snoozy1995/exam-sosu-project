import { createRouter, createWebHistory } from "vue-router";
import CreateCitizen from './components/CreateCitizenComponent.vue'

const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/createCitizen",
      name: "CreateCitizen",
      component: CreateCitizen,
    },
    /*{
      path: "/",
      name: "home",
      component: ChatView,
      meta: {
        requiresLogin: true,
      },
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
Router.beforeEach((to, from, next) => {
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
