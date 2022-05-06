import { createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    {
      path: '/', 
      redirect: '/home',


    },
    { 
      path: '/home', 
      name:'home',
      component: () => import(/* webpackChunkName: "ListPage" */'@/modules/brawlstart/pages/ListPage'),
 
    },

    { 
      path: '/about', 
      name:'about',
      component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/brawlstart/pages/AboutPage') 
    },

    { 
      path: '/brawl-starts-id/:id',
      name:'brawl-starts-id',
      component: () => import(/* webpackChunkName: "BrawlPage" */'@/modules/brawlstart/pages/BrawlPage') ,
      props: (route) => {
        const id = Number( route.params.id )
        return  isNaN( id ) ? { id: 1 } : { id }
        }
    },
    { 
      path: '/:pathMatch(.*)*', 
      // component: () => import(/* webpackChunkName: "NoPageFound" */'@/modules/shared/pages/NoPageFound')
      redirect: '/',
    },

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router