import logIn from '../pom/logInPage.js'

describe('', () => {
    const ln = new logIn();

    beforeEach(() => {
            cy.visit('https://www.zara.com/')
        })

    it.only('', () => {
        cy.xpath("/html/body/div[2]/div[1]/div[1]/div/div[1]/div[1]/div[2]/form/button/div").click()

        cy.xpath("//a[@aria-label='Click enter to go to the search tool']").click()
        ln.setSearchField('T-Shirt{enter}')
        ln.setClickOnSize().click()
        ln.setClickOnXs().click()
        ln.setGetText().contains('VIEW RESULTS (18)')

    })
})
