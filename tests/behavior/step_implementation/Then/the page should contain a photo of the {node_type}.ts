import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page should contain a photo of the {string}', (nodeType: string) => {
    cy.get('[aria-label="image"]')
        .should('be.visible')

    cy.get('[aria-label="image"] img')
        .should('be.visible')
})
