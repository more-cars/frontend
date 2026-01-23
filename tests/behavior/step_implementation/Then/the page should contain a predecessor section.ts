import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a predecessor section', () => {
    cy.get(`section[data-testid="predecessor-section"]`)
        .should('be.visible')
})
