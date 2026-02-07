import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a section with all node types', () => {
    cy.get('body main [data-testid="node-types"]')
        .should('be.visible')

    cy.get('body main [data-testid="node-types"] li')
        .should('have.length.greaterThan', 0)
})
