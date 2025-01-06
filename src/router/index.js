import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheNav from '@/components/TheNav.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import CTABtn from '@/components/CTABtn.vue'
import ActivityCards from '@/components/ActivityCards.vue'
import ExhibitCard from '@/components/ExhibitCard.vue'
import FEPCards from '@/components/FEPCards.vue'
import HeroImg from '@/components/HeroImg.vue'
import ImgWText from '@/components/ImgWText.vue'
import InstagramCards from '@/components/InstagramCards.vue'
import StickyBottomMenu from '@/components/StickyBottomMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
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
      path: '/CTABtn',
      name: 'CTABtn',
      component: CTABtn,
    },
    {
      path: '/activityCards',
      name: 'ActivityCards',
      component: ActivityCards,
    },
    {
      path: '/exhibitCard',
      name: 'ExhibitCard',
      component: ExhibitCard,
    },
    {
      path: '/fEPCards',
      name: 'FEPCards',
      component: FEPCards,
    },
    {
      path: '/heroImg',
      name: 'HeroImg',
      component: HeroImg,
    },
    {
      path: '/imgWText',
      name: 'ImgWText',
      component: ImgWText,
    },
    {
      path: '/instagramCards',
      name: 'InstagramCards',
      component: InstagramCards,
    },
    {
      path: '/stickyBottomMenu',
      name: 'StickyBottomMenu',
      component: StickyBottomMenu,
    },
  ],
})

export default router
