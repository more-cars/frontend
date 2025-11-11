import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should display a {string} node collection', (nodeType: string) => {
    cy.get('[data-testid="brands-list"]')
        .should('be.visible')

    cy.get('[data-testid="brands-list"] li')
        .should('have.length.at.least', 1)
})
