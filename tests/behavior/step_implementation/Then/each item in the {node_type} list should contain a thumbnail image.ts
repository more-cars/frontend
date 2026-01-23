import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('each item in the {string} list should contain a thumbnail image', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"] > ul > li`).then(items => {
        cy.wrap(items)
            .find('img')
            .should('have.length', items.length)
    })
})
