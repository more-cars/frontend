import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a predecessor section', () => {
    cy.get(`section[aria-label="car-model-predecessor"]`)
        .should('be.visible')
})
