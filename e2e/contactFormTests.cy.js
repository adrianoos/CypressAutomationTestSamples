describe('SteelJobs Contact form validation tests', () => {

  it('Empty input fields validation test', () => {
    cy.visit('http://localhost:3000/Kontakt')
    cy.url().should('include', '/Kontakt')
    cy.contains('Wyślij').click()
    cy.get('div#ConfirmBtn').should('be.visible')
    cy.contains('Wiadomość zbyt krótka')
  })

  it('Save contact Message on real server', () => {
    cy.visit('http://localhost:3000/Kontakt')
    cy.url().should('include', '/Kontakt')
    cy.get('input.FeedBackContactInput').type('Adrian.kowalski@gmail.com').should('have.value', 'Adrian.kowalski@gmail.com')
    cy.get('textarea.FeedBackContactMessageInput').type('wiadomość testowa z Cypress proszę o kontakt').should('have.value', 'wiadomość testowa z Cypress proszę o kontakt')
    cy.get('button.ContactBtns').click()
    cy.get('div#SmallMainDiv').should('be.visible').contains('Wiadomość wysłana')
  })
})