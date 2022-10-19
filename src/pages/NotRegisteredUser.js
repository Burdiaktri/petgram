
import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const NotRegisteredUser = () => {
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
          return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Regístrate' />
        }}
      </RegisterMutation>
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
            return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesión' onSubmit={onSubmit} />
          }
        }

      </LoginMutation>

    </>
  )
}

export default NotRegisteredUser
