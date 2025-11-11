import {Then} from "@badeball/cypress-cucumber-preprocessor"

// TODO how to determine whether the correct page is linked?
Then('each item in the {string} node collection should link to its detail page', (nodeType: string) => {
    cy.get('[data-testid="brands-list"]')
        .should('be.visible')

    cy.get('[data-testid="brands-list"] > li')
        .find('a')
        .should('be.visible')
})
