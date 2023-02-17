import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import Layout from '../views/event/Layout.vue'
import Edit from '../views/event/Edit.vue'
import Details from '../views/event/Details.vue'
import Register from '../views/event/Register.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      props: true,
      component: Layout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: Details,
        },
        {
          path: 'register',
          name: 'event-register',
          component: Register,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: Edit,
        },
      ],
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
