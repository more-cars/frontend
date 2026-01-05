import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page title should contain the {string} name', (nodeType: string) => {
    cy.get('[aria-label="fact sheet"] [aria-label="name"]')
        .invoke('text')
        .then((name: string) => {
            cy.title()
                .should('contain', name)
        })
})
