import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should display a fact sheet', () => {
    cy.get('[data-testid="fact-sheet"]')
        .should('be.visible')

    cy.get('[data-testid="fact-sheet"] h2')
        .contains('Fact Sheet')
        .should('be.visible')

    cy.get('[data-testid="fact-sheet"] tbody tr')
        .should('have.length.at.least', 1)
})
