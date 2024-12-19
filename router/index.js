import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheNav from '@/components/TheNav.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import TicketBtn from '@/components/TicketBtn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/theFooter',
      name: 'TheFooter',
      component: TheFooter,
    },
    {
      path: '/theNav',
      name: 'TheNav',
      component: TheNav,
    },
    {
      path: '/scrollToTop',
      name: 'ScrollToTop',
      component: ScrollToTop,
    },
    {
      path: '/ticketBtn',
      name: 'TicketBtn',
      component: TicketBtn,
    },
  ],
})

export default router
