import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('each node type section should contain a description', () => {
    cy.get(`ul[data-testid="node-types"] li`).each(nodeTypeSection => {
        cy.wrap(nodeTypeSection)
            .find('p')
            .should('not.be.empty')
    })
})
