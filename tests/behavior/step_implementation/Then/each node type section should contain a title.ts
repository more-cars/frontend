import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {pluralize, titleize} from "inflection"

Then('each node type section should contain a title', () => {
    cy.get(`ul[data-testid="node-types"] li`).each(nodeTypeSection => {
        const nodeType = nodeTypeSection.attr('data-testid') || ''
        cy.wrap(nodeTypeSection)
            .find('a span')
            .invoke('text')
            .should('equal', titleize(pluralize(nodeType.replace('-', ' '))))
    })
})
