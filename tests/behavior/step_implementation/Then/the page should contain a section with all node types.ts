import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a section with all node types', () => {
    cy.get('[data-testid="node-type-group-section"]')
        .should('be.visible')

    cy.get('[data-testid="node-type-group-section"] li')
        .should('have.length.greaterThan', 0)
})
