import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a successor section', () => {
    cy.get(`section[data-testid="successor-section"]`)
        .should('be.visible')
})
