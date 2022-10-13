describe('delete active job Offer (first from list)', () => {

    //użytkownik powinien być ZALOGOWANY oraz mieć conajmniej jedną aktywną ofertę pracy aby test przebiegł poprawnie

    it('redirect to userPanel from main page', () => {
        cy.visit('http://localhost:3000')
        cy.get('a.MainButtons[href*="userPanel"]').click()
    }) 

    it('confirm that userPanel is displayed properly', () => {
        cy.get('div#UserProfileInfoDiv').should('be.visible')
        cy.get('h2#displayedCompanyName').should('be.visible')
        cy.get('div#EmailInfo').should('be.visible')
        cy.get('div.EditBtns').should('be.visible').contains('Edytuj Dane')
        cy.get('p#phoneValue.AdressFields').should('be.visible').and('not.be.empty')
        //...
    }) 

    it('confirm that userPanel is displayed properly', () => {
        cy.get('div#UserProfileInfoDiv').should('be.visible')
        cy.get('h2#displayedCompanyName').should('be.visible')
        cy.get('div#EmailInfo').should('be.visible')
        cy.get('div.EditBtns').should('be.visible').contains('Edytuj Dane')
        cy.get('p#phoneValue.AdressFields').should('be.visible').and('not.be.empty')
        //...
    }) 

    it('confirm page is displaying active user job offers', () => {
        cy.get('h1.UserOffersHeaderActive').contains('Aktywne oferty pracy:')
    }) 

    it('locate execute end offer button', () => {
        cy.get('div.DeleteButton2').contains('Zakończ').click()
    }) 

    it('confirm that popUpModal is displayed', () => {
        cy.get('div#SmallMainDiv').should('be.visible')
    }) 

    it('execute confirmation button', () => {
        cy.get('div#EditUserFields').children('div#DeleteConfirmDiv')
        cy.get('button.ConfirmBtns').contains('Tak').click({force: true})
    }) 
    
    it('check if confirmation info appears', () => {
        cy.get('h4.PopUpModalTitle').contains('Ogłoszenie zakończone')
    }) 
   
})