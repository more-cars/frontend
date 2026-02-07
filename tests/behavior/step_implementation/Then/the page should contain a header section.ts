import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a header section', () => {
    cy.get(`body header`)
        .should('be.visible')
})
