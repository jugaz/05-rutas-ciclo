import { createRouter , createWebHashHistory} from 'vue-router'

const routes = [

    { 
      path: '/', 
      component: () => import(/* webpackChunkName: "ListPage" */'@/modules/brawlstart/pages/ListPage') 
    },

    { 
      path: '/about', 
      component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/brawlstart/pages/AboutPage') 
    },

    { 
      path: '/:id',
      component: () => import(/* webpackChunkName: "BrawlPage" */'@/modules/brawlstart/pages/BrawlPage') 
    },

    { 
      path: '/:pathMatch(.*)*', 
      component: () => import(/* webpackChunkName: "NoPageFound" */'@/modules/shared/pages/NoPageFound') 
    },

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router