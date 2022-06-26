import { createRouter , createWebHistory} from 'vue-router'
import isAuthenticateGuard from './auth-guard'
const routes = [
    {
      path: '/', 
      redirect: '/friends',
    },
    {
      path:'/friends',
      name:'friends',
      component: () => import(/* webpackChunkName: "FriendstLayout" */'@/modules/friends/layouts/FriendsLayout'),
      children:[
        { 
          path: 'home', 
          name:'friends-home',
          component: () => import(/* webpackChunkName: "ListPage" */'@/modules/friends/pages/ListPage'),
    
        },

        { 
          path: 'about', 
          name:'friends-about',
          component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/friends/pages/AboutPage') 
        },

        { 
          path: 'friends-id/:id',
          name:'friends-id',
          component: () => import(/* webpackChunkName: "FriendsPage" */'@/modules/friends/pages/FriendsPage') ,
          props: (route) => {
            const id = Number( route.params.id )
            return  isNaN( id ) ? { id: 1 } : { id }
            }
        },
        {
          path: '', 
          redirect: {name: 'friends-about'},
        },
      ]
    },


    {
      path:'/big-bang-theory',
      name:'big-bang-theory',
      beforeEnter: [ isAuthenticateGuard ],
      component: () => import(/* webpackChunkName: "BigBangTheoryLayout" */'@/modules/big-bang-theory/layouts/BigBangTheoryLayout'),
      children:[
        { 
          path: 'characters', 
          name:'big-bang-theory-characters',
          component: () => import(/* webpackChunkName: "CharactersPage" */'@/modules/big-bang-theory/pages/CharactersPage'),
    
        },

        { 
          path: 'about', 
          name:'big-bang-theory-about',
          component: () => import(/* webpackChunkName: "AboutPage" */'@/modules/big-bang-theory/pages/AboutPage') 
        },
        {
          path: '', 
          redirect: {name: 'big-bang-theory-about'},
        },
      ]
    },

    { 
      path: '/:pathMatch(.*)*', 
      // component: () => import(/* webpackChunkName: "NoPageFound" */'@/modules/shared/pages/NoPageFound')
      redirect: { name: 'friends-about'},
    },

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
  })

// Guard Global - Sincrono

// router.beforeEach(( to, from, next ) => {
//   console.log("to, from, next", {to, from, next})

//   const random = Math.random() * 100 

//   if( random > 50 ) {
//     console.log('autenticado')
//     next()
//   }

//   else {
//     console.log(random, 'bloqueado por el beforeEach Guard')
//     next({name: 'friends-home'})
//   }

//   //next()
// })

// const canAccess = () => {
//   return new Promise( resolve => {

//     const random = Math.random() * 100 

//     if( random > 50 ) {
//       console.log('Autenticado - canAccess')
//       resolve(true)
//     }

//     else {
//       console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//       resolve(false)
//     }
//   })
// }

// router.beforeEach( async( to, from, next ) => {

//   const authorized = await canAccess()
//   authorized 
//     ? next()
//     : next({name: 'friends-home'})
  

// })

export default router