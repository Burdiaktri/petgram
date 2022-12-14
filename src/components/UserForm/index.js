import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error, Link } from './styles'
import { SubmitButton } from '../SubmitButton'
import propTypes from 'prop-types'

export const UserForm = ({ error, disabled, onSubmit, title, linkTitle, link }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>

      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
        <Link to={link}>{linkTitle}</Link>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}

UserForm.propTypes = {
  error: propTypes.func,
  disabled: propTypes.bool,
  onSubmit: propTypes.func,
  title: propTypes.string,
  linkTitle: propTypes.string,
  link: propTypes.string

}
