import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the main headline should contain the {string} name', (nodeType: string) => {
    let targetProperty = 'name'
    if (['lap time', 'session result'].includes(nodeType.toLowerCase())) {
        targetProperty = 'driver_name'
    }

    cy.get(`[data-testid="fact-sheet"] [data-testid="${targetProperty}"] td`)
        .last()
        .invoke('text')
        .then((name: string) => {
            cy.get('h1')
                .should('contain', name)
        })
})
