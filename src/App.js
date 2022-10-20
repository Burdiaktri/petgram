import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppContext } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const Logo = React.lazy(() => import('./components/Logo'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NavBar = React.lazy(() => import('./components/NavBar'))
const User = React.lazy(() => import('./pages/User'))
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(AppContext)

  return (

    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
          <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route exact path='/login' element={!isAuth ? <Login /> : <Navigate replace to='/' />} />
          <Route exact path='/register' element={!isAuth ? <Register /> : <Navigate replace to='/' />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>

  )
}
