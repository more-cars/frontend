import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the pagination bar should not be visible', () => {
    cy.get('[aria-label="pagination"]')
        .should('not.be.visible')
})
