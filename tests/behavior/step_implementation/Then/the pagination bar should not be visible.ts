import {Then} from "@badeball/cypress-cucumber-preprocessor"

// TODO clarify specification
Then('the pagination bar should not be visible', () => {
    cy.get('[aria-label="pagination"] [aria-label="first page"]')
        .should('not.exist')

    cy.get('[aria-label="pagination"] [aria-label="last page"]')
        .should('not.exist')

    cy.get('[aria-label="pagination"] [aria-label="previous page"]')
        .should('not.exist')

    cy.get('[aria-label="pagination"] [aria-label="next page"]')
        .should('not.exist')
})
