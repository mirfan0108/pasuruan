import VueRouter        from "vue-router"
import AppMain          from "@/app/pages/main.html"
import LoginPage        from "@/app/pages/login/login.page.html"
import HomePage         from "@/app/pages/home/home.page.html"
import * as MasterFiles from "./masterfile.route"
import * as Analytic from "./analytic.route"
const routes = new VueRouter({
  mode: 'history',
  routes: [{
    path: "/",
    component: {
      template: "<router-view></router-view>"
    },
    children: [
      {
        path: "",
        component: AppMain,
        children: [
          { 
            path: "/", 
            name: "dashboard.page", 
            component: HomePage
          },
          ...Analytic.default,
          MasterFiles.default.equipment,
          MasterFiles.default.material,
          MasterFiles.default.talent,
          MasterFiles.default.power,
          MasterFiles.default.effort,
          MasterFiles.default.interest,
          MasterFiles.default.responsible,
          MasterFiles.default.temperament,
          MasterFiles.default.authority,
          MasterFiles.default.opd,
          MasterFiles.default.organization,
          MasterFiles.default.unit,
          MasterFiles.default.position,
          MasterFiles.default.createPosition
        ]
      },
      {
        path: "login",
        name: 'login.page',
        component: LoginPage
      }
    ]}
  ]
})

routes.beforeEach((to, from, next) => {
  if (to.name != 'login.page' && !sessionStorage.getItem('__CSRF')) next({ name: 'login.page' })
  else next()
})

export default routes