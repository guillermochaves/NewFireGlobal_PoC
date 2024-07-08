export class SalaryInsights {

    // #region Get

    getIframeDocument = () => {
        return cy
        .get('iframe#idIframe')
        .its('0.contentDocument').should('exist')
      }
      
      getIframeBody = () => {
        return this.getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }

    getRoleDropdown(){
        return this.getIframeBody().find('[data-text="Role"] input')
    }

    getCountryDropdown(){
        return this.getIframeBody().find('[data-text="Country"] input')
    }

    getSearchButton(){
        return this.getIframeBody().contains('button', 'Search')
    }

    getDropdownOption(option:string){
        return this.getIframeBody().contains('[role="option"]:visible', option)
    }

    getResultsFilterBar(){
        return this.getIframeBody().find('[data-qa="filter-bar"]')
    }

    getSalaryTable(){
        return this.getIframeBody().find('[data-qa="salary-table"]')
    }

    getRoleErrorMsg(){
        return this.getIframeBody().find('[data-qa="role-field"]').parent().find('p')
    }

    // #endregion

    // #region Actions
    clickSerachButton(){
        this.getSearchButton().click()
    }

    selectRoleDdl(role: string){
        //cy.wait(2000)
        this.getRoleDropdown().type(role)
        this.getDropdownOption(role).click()

    }

    selectCountryDdl(country: string){
        
        this.getCountryDropdown().type(country)
        this.getDropdownOption(country).click()
    }

    // #endregion

}