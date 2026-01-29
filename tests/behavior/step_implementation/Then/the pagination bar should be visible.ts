import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the pagination bar should be visible', () => {
    cy.get('[aria-label="pagination"]')
        .should('be.visible')
})
