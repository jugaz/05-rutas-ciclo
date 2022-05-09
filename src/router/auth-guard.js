const isAuthenticateGuard = async( to, from, next ) => {
    console.log("to, from, next", {to, from, next})

    return new Promise( () => {
        const random = Math.random() * 100 

          if( random > 50 ) {
            console.log('está autenticado')
            next()
          }
        
          else {
            console.log(random, 'bloqueado por el isAuthenticateGuard')
            next({name: 'friends-home'})
          }
    })

    
}

export default isAuthenticateGuard