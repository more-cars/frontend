import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should display a fact sheet', () => {
    cy.get('[aria-label="fact sheet"]')
        .should('be.visible')

    cy.get('[aria-label="fact sheet"] h2')
        .contains('Fact Sheet')
        .should('be.visible')

    cy.get('[aria-label="fact sheet"] dl dt')
        .should('have.length.at.least', 1)
})
