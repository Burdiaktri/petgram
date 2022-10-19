import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </>
  )
}

export default User
