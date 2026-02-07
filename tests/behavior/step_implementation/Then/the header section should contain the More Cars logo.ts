import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the header section should contain the More Cars logo', () => {
    cy.get(`body header .logo`)
        .should('be.visible')
        .and('not.be.empty')
})
