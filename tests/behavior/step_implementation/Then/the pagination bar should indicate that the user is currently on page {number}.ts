import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the pagination bar should indicate that the user is currently on page {int}', (page: number) => {
    cy.get('[aria-label="pagination"] [aria-label="this page"]')
        .should('contain', page)
})
