import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page title should contain the {string} name', (nodeType: string) => {
    cy.get('[data-testid="fact-sheet"] [data-testid="name"] td')
        .last()
        .invoke('text')
        .then((name: string) => {
            cy.title()
                .should('contain', name)
        })
})
