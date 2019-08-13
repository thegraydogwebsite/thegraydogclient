import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import Staff from './views/Staff.vue'
import LogIn from './views/LogIn.vue'
import Services from './views/Services.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: "/staff",
      name: "staff",
      component: Staff
    },
    {
      path: "/login",
      name: "login",
      component: LogIn
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
})
