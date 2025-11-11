import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('each item in the {string} node collection should contain primary information', (nodeType: string) => {
    cy.get('[data-testid="brands-list"]')
        .should('be.visible')

    cy.get('[data-testid="brands-list"] > li ul[aria-label="Primary Information"]')
        .should('be.visible')

    cy.get('[data-testid="brands-list"] > li ul[aria-label="Primary Information"] li')
        .should('have.length.at.least', 1)
})
