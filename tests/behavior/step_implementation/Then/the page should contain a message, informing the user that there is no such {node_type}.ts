import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a message, informing the user that there is no such {string}', (nodeType: string) => {
    cy.get(`[data-testid="data-not-found"]`)
        .should('be.visible')
})
