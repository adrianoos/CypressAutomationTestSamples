
describe('Login redirect to userPanel and logout with redirect to main page', () => {

    it('succesfull user login', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('input.LoginInputs[placeholder=e-mail]').type(Cypress.env('testUserLogin')) // zmienna env
        cy.get('input.LoginInputs[placeholder=hasło]').type(Cypress.env('testUserPassw'))
        cy.get('div#LoginBtn').click()
        cy.url().should('include', '/userPanel')
        cy.get('div.MainButtons').contains('Wyloguj').click()
        cy.get('div#TopBar4MainDiv').should('be.visible')
      }) 
})



