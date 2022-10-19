import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { AppProvider } from './Context'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-burdiaktrinidad.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppProvider>

      <App />

    </AppProvider>
  </ApolloProvider>,
  document.getElementById('app')
)
