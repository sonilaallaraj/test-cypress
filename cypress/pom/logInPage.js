export default class logIn {
    setSearch(){
      return "//a[@aria-label='Click enter to go to the search tool']"
    }

    setSearchField(text){
        cy.xpath("//input[@id='search-products-form-combo-input']").type(text)
    }

    setSize(){
        return '//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/nav/ul/li[2]/button'
    }

    setClickOnSize(){
        return cy.xpath(this.setSize())
    }

    setXS(){
        return '//*[@id="main"]/article/div/div/section/div[1]/div[3]/div[1]/div[1]/nav/ul/li[1]/button'
    }

    setClickOnXs(){
        return cy.xpath(this.setXS())
    }

    setGetText(){
        return cy.xpath("/html//main[@id='main']/article[@class='layout-content__article']/div[@class='search-results-view__container']//section[@class='search-products-view__search-container']//div[@class='filters-panel filters-panel-std']//div[@class='filters-footer']/button[2]/div/span")
    }


}

