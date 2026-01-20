import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a photo section', () => {
    cy.get(`section[data-testid="lead-image"]`)
        .should('be.visible')
})
