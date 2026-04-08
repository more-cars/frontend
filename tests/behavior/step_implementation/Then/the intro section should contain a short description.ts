import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the about section should contain a short description', () => {
    cy.get(`footer h5`)
        .contains('about', {matchCase: false})
        .parent()
        .find('p')
        .should('not.be.empty')
})
