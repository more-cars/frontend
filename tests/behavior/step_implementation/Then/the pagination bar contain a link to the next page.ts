import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the pagination bar should contain a link to the next page', () => {
    cy.get('[aria-label="pagination"] [aria-label="next page"]')
        .should('be.visible')
})
