import { createRouter, createWebHistory } from "vue-router";
import CreateCitizen from './components/teacher/CreateCitizenComponent.vue';
import ModuleView from './components/misc/ModuleView.vue';
import LoginComponent from './components/LoginComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import ViewCitizenComponent from './components/ViewCitizenComponent.vue';
import CreateUserComponent from './components/admin/CreateUserComponent.vue';
import CreateSchoolComponent from './components/admin/CreateSchoolComponent.vue';
import AllSchoolsListComponent from './components/admin/AllSchoolsListComponent.vue';
import UserSearchComponent from './components/admin/UserSearchComponent.vue';
import CreateCaseComponent from './components/teacher/CreateCaseComponent.vue';
import ViewCaseComponent from './components/shared/ViewCaseComponent.vue';
const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComponent,
    },
    {
      path:'/school/',
      component:ModuleView,
      children:[
        {
          path: "create",
          name: "CreateSchool",
          component: CreateSchoolComponent,
          meta: {
            breadcrumb:[{label: 'Ny skole', to: '/school/create'}]
          },
        },
        {
          path: "list",
          name: "ListSchool",
          component: AllSchoolsListComponent,
          meta: {
            breadcrumb:[{label: 'Alle skoler', to: '/school/list'}]
          },
        },
      ],
    },
    {
      path:'/user/',
      component:ModuleView,
      children:[
        {
          path: "create",
          name: "CreateUser",
          component: CreateUserComponent,
          meta: {
            breadcrumb:[{label: 'Ny bruger', to: '/user/create'}]
          },
        },
        {
          path: "search",
          name: "SearchUser",
          component: UserSearchComponent,
          meta: {
            breadcrumb:[{label: 'Søg bruger', to: '/user/search'}]
          },
        }
      ],
    },
    {
      path:'/citizen/',
      component:ModuleView,
      children:[
        {
          path: "create",
          name: "CreateCitizen",
          component: CreateCitizen,
          meta: {
            breadcrumb:[{label: 'Ny borger', to: '/citizen/create'}]
          },
        },
        {
          path: ":id",
          name: "ViewCitizen",
          component:ViewCitizenComponent,
        },
      ],
    },
    {
      path:'/case/',
      component:ModuleView,
      children:[
        {
          path: "create",
          name: "CreateCase",
          component: CreateCaseComponent,
          meta: {
            breadcrumb:[{label: 'Ny case', to: '/case/create'}]
          },
        },
        {
          path: ":id",
          name: "ViewCase",
          component:  ViewCaseComponent,
          meta: {
            breadcrumb:[{label: 'Case', to: '/case/'}]
          },
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      meta: {public:true},
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

Router.afterEach((to,from,fail)=>{
  BreadcrumbStore().set(to.meta.breadcrumb);
  if(to.name=="ViewCitizen"){
    BreadcrumbStore().set([{label:'Borger '+to.params.id,to:'/citizen/'+to.params.id}]);
  }
});
Router.beforeEach((to, from, next) => {
  if(to.name=="Login"&&from.name=="Login"){ next(); return; }
  let authStore=AuthStore();
  if (!to.matched.some((record) => record.meta.public)) {
    authStore.getProfile().then(()=>{
      if (!authStore.loggedIn) {
        next({ name: "Login",query:{redirect:to.path} });
      } else {
        next();
      }
    }).catch((e)=>{ console.log(e); });
  }else{
    next();
  }
});

export default Router;
