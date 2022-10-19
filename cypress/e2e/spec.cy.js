/* global describe, it, cy */

describe('Petgram', function () {
  it('Ver si la app funciona', function () {
    cy.visit('/')
  })

  it('Navegar a una categoria y ver fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navegar al NavBar desde Home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Usuarios no registrados ven el form de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
