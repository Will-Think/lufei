import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const LightCourse = () => import('../views/lightCourse/LightCourse.vue')
const Micro = () => import('../views/micro/Micro.vue')
const Cource = () => import('../views/course/Course.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home    
  },
  {
    path: '/lightcourse',
    name: 'LightCourse',
    component: LightCourse
  },
  {
    path: '/micro',
    name: 'Micro',
    component: Micro
  },
  {
    path: '/course',
    name: 'Course',
    component: Cource
  }
]

const router = new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes
})

export default router

