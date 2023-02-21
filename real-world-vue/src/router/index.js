import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import nProgress from 'nprogress'

import EventListView from '../views/EventListView.vue'
import Layout from '../views/event/Layout.vue'
import Edit from '../views/event/Edit.vue'
import Details from '../views/event/Details.vue'
import Register from '../views/event/Register.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import EventService from '../services/EventService'
import GStore from '@/store'

export const totalEvents = ref(0)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page) || 1,
      }),
      beforeEnter(routeTo, routeFrom, next) {
        EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
          .then((response) => {
            GStore.event = response.data
            totalEvents.value = response.headers['x-total-count']
            next((comp) => {
              comp.events.value = response.data
              comp.totalEvents.value = response.headers['x-total-count']
            })
          })
          .catch((error) => {
            next({ name: 'network-error' })
            console.log(error)
          })
      },
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: Layout,
      beforeEnter: (to) => {
        return EventService.getEvent(to.params.id)
          .then((response) => {
            GStore.event = response.data
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: '404Resource',
                params: { resource: 'event' },
              }
            } else {
              return { name: 'NetworkError' }
            }
          })
      },
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
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/events/' + to.params.afterEvent }
      },
      /* children: [
        {
          path: 'register',
          redirect: () => {
            return { name: 'event-register' }
          },
        },
        {
          path: 'edit',
          redirect: () => {
            return { name: 'event-edit' }
          },
        },
      ], */
    },

    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
      alias: '/about',
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError,
    },
  ],
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
