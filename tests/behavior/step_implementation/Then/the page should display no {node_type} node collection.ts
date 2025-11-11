import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should display no {string} node collection', (nodeType: string) => {
    cy.get('[data-testid="brands-list"]')
        .should('not.exist')
})
