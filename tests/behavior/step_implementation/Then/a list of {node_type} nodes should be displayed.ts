import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('a list of {string} nodes should be displayed', (nodeType: string) => {
    cy.get('[data-testid="brands-list"]')
        .should('be.visible')

    cy.get('[data-testid="brands-list"] li')
        .should('have.length.at.least', 1)
})
