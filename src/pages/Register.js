
import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

const Register = () => {
  const { activateAuth } = useContext(AppContext)

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = async ({ email, password }) => {
            const input = { email, password }
            const variables = { input }

            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
          const errorMsg = error && 'El usuario ya existe o hay algún problema'
          return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Regístrate' link='/login' linkTitle='Iniciar Sesión' />
        }}
      </RegisterMutation>

    </>
  )
}

export default Register
