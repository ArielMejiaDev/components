import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/Contact'
import Publications from '../views/Publications'
import SocialResponsability from '../views/SocialResponsability'
import OurTeam from '../views/OurTeam'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/publicaciones',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/nuestro-equipo',
    name: 'OurTeam',
    component: OurTeam
  },
  {
    path: '/responsabilidad-social',
    name: 'SocialResponsability',
    component: SocialResponsability
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
