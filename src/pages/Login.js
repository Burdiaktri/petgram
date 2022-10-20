
import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { UserForm } from '../components/UserForm'
import { LoginMutation } from '../container/LoginMutation'

const Login = () => {
  const { activateAuth } = useContext(AppContext)

  return (
    <>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = async ({ email, password }) => {
              const input = { email, password }
              const variables = { input }

              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'
            return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesión' onSubmit={onSubmit} link='/register' linkTitle='No tienes cuenta?' />
          }
        }

      </LoginMutation>

    </>
  )
}

export default Login
