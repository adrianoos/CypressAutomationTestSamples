describe('SteelJobs loginPage tests', () => {

    // tests for logged off user

    it('Login form display test', () => {
      cy.visit('http://localhost:3000/login')
      cy.url().should('include', '/login')
      cy.get('div#LoginPageMainDiv').should('be.visible')
      cy.get('input.LoginInputs').should('have.length', 2) // check for number of elements
      cy.get('div#LoginBtn').contains('Zaloguj')
      cy.get('div.Link').should('have.length', 2)
    })

    it('Login form redirect to main page', () => {
        cy.visit('http://localhost:3000/login')
        cy.url().should('include', '/login')
        cy.get('h1#LoginLogo').click()
        cy.url().should('not.include', '/login')
        cy.get('a.MainButtons').should('be.visible')
      })

    it('empty inputs validation test', () => {
        cy.visit('http://localhost:3000/login')
        cy.url().should('include', '/login')
        cy.get('div#LoginBtn').click()
        cy.get('h3#ErrorMessages').contains('błędny e-mail')
        cy.get('input.LoginInputs').should('have.length', 2)
        cy.get('input.LoginInputs[placeholder=e-mail]').should('have.value', '')
        cy.get('input.LoginInputs[placeholder=hasło]').should('have.value', '')
      })

      it('switch modal type to registration form', () => {
        cy.visit('http://localhost:3000/login')
        cy.url().should('include', '/login')
        cy.get('div.Link').contains('Rejestracja').click()
        cy.get('div#FormReg').should('be.visible')
        cy.get('input.LoginInputs').should('have.length', 3)
        cy.get('input[type=checkbox]').should('not.be.checked')
        cy.get('svg').should('not.have.attr', 'version')
      })
  })