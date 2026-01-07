import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a successor section', () => {
    cy.get(`section[aria-label="car-model-successor"]`)
        .should('be.visible')
})
