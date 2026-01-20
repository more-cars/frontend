import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the photo section should contain an image of the {string}', (nodeType: string) => {
    cy.get('section[data-testid="lead-image"]')
        .should('be.visible')

    cy.get('section[data-testid="lead-image"] img')
        .should('be.visible')
})
