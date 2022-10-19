import React, { createContext, useState } from 'react'
import { useApolloClient } from 'react-apollo'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token') // window session storage es síncrono, bloquea el thread principal. Siendo una función se consigue que
    // la inicialización sea en estado lazy, de forma que no bloquee el renderizado de la app
  })

  const client = useApolloClient()
  const activateAuth = token => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }

  const removeAuth = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
    client.resetStore()
  }

  const value = {
    isAuth,
    activateAuth,
    removeAuth
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider }
