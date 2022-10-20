import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </>
  )
}

export default User
