import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('each node type section should contain a representative icon', () => {
    cy.get(`ul[data-testid="node-types"] li`).each(nodeTypeSection => {
        cy.wrap(nodeTypeSection)
            .find('> span')
            .should('not.be.empty')
    })
})
