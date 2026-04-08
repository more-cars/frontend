import {When} from "@badeball/cypress-cucumber-preprocessor"

When('there should be a page footer', () => {
    cy.get('footer')
        .should('be.visible')
})
