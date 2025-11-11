import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('a message should inform the user that there are no {string} nodes', (nodeType: string) => {
    cy.get('[data-testid="brands-list-empty"]')
        .should('be.visible')
})
