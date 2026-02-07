import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain the More Cars logo', () => {
    cy.get('body header .logo')
        .should('be.visible')
})
