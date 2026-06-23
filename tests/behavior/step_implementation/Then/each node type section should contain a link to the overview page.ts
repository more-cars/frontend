import {Then} from "@badeball/cypress-cucumber-preprocessor"
import assert from "assert"
import {pluralize} from "inflection"

Then('each node type section should contain a link to the overview page', () => {
    cy.get(`[data-testid="node-type-group-section"] li`).each(nodeTypeSection => {
        const nodeType = nodeTypeSection.attr('data-testid') || ''
        const anchor = cy.wrap(nodeTypeSection).find('a')

        anchor.then(a => {
            assert.strictEqual(
                a.attr('href'),
                '/' + pluralize(nodeType),
                `link is supposed to be ${'/' + pluralize(nodeType)}, but is ${a.attr('href')}`,
            )
        })
    })
})
