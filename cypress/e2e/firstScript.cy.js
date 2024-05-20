
describe.skip('first test', () => {
    it('should run successfully', () => {

        cy.visit('https://www.google.com/')

        cy.xpath("//textarea[@id='APjFqb']").type('cypress{enter}')
        cy.xpath("//div[@role='heading'][normalize-space()='Cypress']").contains('Cypress')
    })
})