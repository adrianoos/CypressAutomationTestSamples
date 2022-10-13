describe('Add new job offer test for logged user', () => {

    //użytkownik powinien być wylogowany aby test przebiegł poprawnie

    it('visit main page and redirect to login page', () => {
        cy.visit('http://localhost:3000')
        cy.get('a.MainButtons').contains('Logowanie').click()
    }) 

    it('login user and redirect to userPanel', () => {
        cy.get('input.LoginInputs[placeholder=e-mail]').type(Cypress.env('testUserLogin')) // zmienna env
        cy.get('input.LoginInputs[placeholder=hasło]').type(Cypress.env('testUserPassw'))
        cy.get('div#LoginBtn').click()
    }) 

    it('redirect to offer type selector and choose job offer', () => {
        cy.get('a.MainButtons').contains('Dodaj Ogłoszenie').click()
        cy.get('a.ChooseOfferTypeButtons').contains('Oferta Pracy').click()
    }) 

    it('select basicOffer type', () => {
        cy.get('div.SampleContainer').contains('Ogłoszenie Podstawowe').click()
    }) 

    it('fill and save offer details', () => {
        cy.get('select#roleSelect').select('Spawacz')
        cy.get('select#specialitySelect').select('141')
        cy.get('select#ExperienceSelect').select('Początkujący')
        cy.get('input#TitleInput').type('Zatrudnię spawacza TIG')
        cy.get('textarea#DescriptionInput').type('Szczegoły pod telefonem')
        cy.get('select#countrySelect').select('Polska')
        cy.get('div.NaviBtnsEditFields').contains('Dalej').click()
    }) 

    it('accept statute and add offer', () => {
        cy.get('input[type=checkbox]').check()
        cy.get('div#PayButton').click()
    }) 

    it('check for confirmation', () => {
        cy.get('div#SmallMainDiv').contains('Dziękujemy za dodanie oferty')
    }) 
   
})


