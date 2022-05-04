import { createRouter, createWebHistory } from "vue-router";
import CreateCitizen from './components/teacher/CreateCitizenComponent.vue';
import ConnectionFailedComponent from './components/misc/ConnectionFailedComponent.vue';
import ModuleView from './components/misc/ModuleView.vue';
import LoginComponent from './components/LoginComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import ViewCitizenComponent from './components/ViewCitizenComponent.vue';
import CreateUserComponent from './components/admin/CreateUserComponent.vue';
import CreateSchoolComponent from './components/admin/CreateSchoolComponent.vue';
const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
      meta: {
        requiresLogin: true,
      },
    },
    {
      path:'/school/',
      component:ModuleView,
      meta: {
        requiresLogin: true,
        breadcrumb:[{label: 'Borger', to: '/citizen/'}]
      },
      children:[
        {
          path: "create",
          name: "CreateSchool",
          component: CreateSchoolComponent,
          meta: {
            requiresLogin: true,
            breadcrumb:[{label: 'Ny skole', to: '/school/create'}]
          },
        },
      ],
    },
    {
      path:'/user/',
      component:ModuleView,
      meta: {
        requiresLogin: true,
        breadcrumb:[{label: 'Borger', to: '/citizen/'}]
      },
      children:[
        {
          path: "create",
          name: "CreateUser",
          component: CreateUserComponent,
          meta: {
            requiresLogin: true,
            breadcrumb:[{label: 'Ny bruger', to: '/user/create'}]
          },
        },
      ],
    },
    {
      path:'/citizen/',
      component:ModuleView,
      meta: {
        requiresLogin: true,
        breadcrumb:[{label: 'Borger', to: '/citizen/'}]
      },
      children:[
        {
          path: "create",
          name: "CreateCitizen",
          component: CreateCitizen,
          meta: {
            requiresLogin: true,
            breadcrumb:[{label: 'Ny borger', to: '/citizen/create'}]
          },
        },
        {
          path: ":id",
          name: "ViewCitizen",
          component:ViewCitizenComponent,
          meta: {
            requiresLogin: true,
            breadcrumb:[{label: 'Borger', to: '/citizen/'}]
          },
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: LoginComponent,
    },
    {
      path: "/con404",
      name: "FailedConnection",
      component: ConnectionFailedComponent,
    },
  ],
});

import { AuthStore } from "./stores/authStore";
import { BreadcrumbStore } from "./stores/breadcrumbStore";
Router.beforeEach((to, from, next) => {
  if(!Router.getRoutes().some((route)=>route.path==to.path)){
    next("/");
    return;
  }
  BreadcrumbStore().set(to.meta.breadcrumb);
  if(to.name=="FailedConnection"){
    next();
    return;
  }
  let authStore=AuthStore();
  if(authStore.user&&authStore.user.username.length){
    next();
    return;
  }
  authStore.getProfile().then(()=>{
    if (to.matched.some((record) => record.meta.requiresLogin)) {
      if (!authStore.user||authStore.user.username.length <= 0) {
        next({ name: "Login" });
      } else {
        next();
      }
    } else {
      next();
    }
  }).catch(()=>{
    next({name:"FailedConnection"})
  });
});

export default Router;
