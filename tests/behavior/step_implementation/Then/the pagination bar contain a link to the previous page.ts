import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the pagination bar should contain a link to the previous page', () => {
    cy.get('[aria-label="pagination"] [aria-label="previous page"]')
        .should('be.visible')
})
