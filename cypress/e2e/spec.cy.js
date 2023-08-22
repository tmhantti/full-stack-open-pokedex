/* eslint-disable linebreak-style */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Pokedex - Navigation Test', () => {
  it('should navigate from HomePage to Ekans Pokemon Page', function() {
    cy.visit('http://localhost:8080')
    cy.get('a[href="/pokemon/ekans"]').click()

    // confirm the new URL is the expected one
    cy.url().should('include', '/pokemon/ekans')

    // confirm the visited page contains the text 'ekans'
    cy.contains('ekans').should('be.visible')
  })
})
