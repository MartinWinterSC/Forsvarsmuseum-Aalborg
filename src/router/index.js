import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import ChildrensBirthdayView from '@/views/ChildrensBirthdayView.vue'
import ExhibitIndividualView from '@/views/ExhibitIndividualView.vue'
import ExhibitOverView from '@/views/ExhibitOverview.vue'
import FamilyNKidsView from '@/views/FamilyNKidsView.vue'
import VisitUs from '@/views/VisitUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/childrensBirthdayView',
      name: 'childrensBirthdayView',
      component: ChildrensBirthdayView,
    },
    {
      path: '/exhibitIndividualView',
      name: 'exhibitIndividualView',
      component: ExhibitIndividualView,
    },
    {
      path: '/exhibitOverView',
      name: 'exhibitOverView',
      component: ExhibitOverView,
    },
    {
      path: '/familyNKidsView',
      name: 'familyNKidsView',
      component: FamilyNKidsView,
    },
    {
      path: '/visitUs',
      name: 'visitUs',
      component: VisitUs,
    },
  ],
})

export default router
