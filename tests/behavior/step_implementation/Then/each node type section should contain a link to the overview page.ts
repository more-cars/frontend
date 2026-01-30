import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {pluralize} from "inflection"

Then('each node type section should contain a link to the overview page', () => {
    cy.get(`ul[data-testid="node-types"] li`).each(nodeTypeSection => {
        const nodeType = nodeTypeSection.attr('data-testid') || ''
        const anchor = cy.wrap(nodeTypeSection).find('a')

        anchor.then(a => {
            assert.equal(a.attr('href'), '/' + pluralize(nodeType))
        })
    })
})
