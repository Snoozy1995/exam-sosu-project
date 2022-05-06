import { createRouter, createWebHistory } from "vue-router";
import CreateCitizen from './components/teacher/CreateCitizenComponent.vue';
import ConnectionFailedComponent from './components/misc/ConnectionFailedComponent.vue';
import ModuleView from './components/misc/ModuleView.vue';
import LoginComponent from './components/LoginComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import ViewCitizenComponent from './components/ViewCitizenComponent.vue';
import CreateUserComponent from './components/admin/CreateUserComponent.vue';
import CreateSchoolComponent from './components/admin/CreateSchoolComponent.vue';
import UserSearchComponent from './components/admin/UserSearchComponent.vue';
import CreateCaseComponent from './components/teacher/CreateCaseComponent.vue';
import ViewCaseComponent from './components/shared/ViewCaseComponent.vue';
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
        {
          path: "search",
          name: "SearchUser",
          component: UserSearchComponent,
          meta: {
            requiresLogin: true,
            breadcrumb:[{label: 'Søg bruger', to: '/user/search'}]
          },
        }
      ],
    },
    {
      path:'/citizen/',
      component:ModuleView,
      meta: {
        requiresLogin: true,
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
      path:'/case/',
      component:ModuleView,
      meta: {
        requiresLogin: true,
      },
      children:[
        {
          path: "create",
          name: "CreateCase",
          component: CreateCaseComponent,
          meta: {
            requiresLogin: true,
            breadcrumb:[{label: 'Ny case', to: '/case/create'}]
          },
        },
        {
          path: ":id",
          name: "ViewCase",
          component:  ViewCaseComponent,
          meta: {
            requiresLogin: true,
            breadcrumb:[{label: 'Case', to: '/case/'}]
          },
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: LoginComponent,
    },
    /*{
      path: "/:catchAll(.*)",
      name: "404",
      component: ConnectionFailedComponent, //Change this.
    },*/
  ],
});

import { AuthStore } from "./stores/authStore";
import { BreadcrumbStore } from "./stores/breadcrumbStore";
Router.beforeEach((to, from, next) => {
  if(to.name=="Login"&&from.name=="Login"){ next(); return; }
  BreadcrumbStore().set(to.meta.breadcrumb);
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
  }).catch(()=>{ });
});

export default Router;
