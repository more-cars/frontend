import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain an intro section', () => {
    cy.get('body main [data-testid="intro"]')
        .should('be.visible')
})
