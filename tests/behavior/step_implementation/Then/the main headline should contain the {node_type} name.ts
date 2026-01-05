import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the main headline should contain the {string} name', (nodeType: string) => {
    cy.get('[aria-label="fact sheet"] [aria-label="name"]')
        .invoke('text')
        .then((name: string) => {
            cy.get('h1')
                .should('contain', name)
        })
})
