import { createRouter, createWebHistory } from 'vue-router'

import landingPage from "@/views/landing-page.vue"
import Psychologist_Info from "@/views/Psychologist-Info.vue"


const routes = [
    {
      name:"home",
      path: '/',
      component: landingPage
    },
    {
      name:"Psychologist",
      path: '/Psychologist-filter',
      component: Psychologist_Info
    }
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



export default router
