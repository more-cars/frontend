import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain no predecessor section', () => {
    cy.get(`section[aria-label="car-model-predecessor"]`)
        .should('not.exist')
})
