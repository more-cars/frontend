import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('all items in the {string} list should contain a thumbnail image', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"]`)
        .should('be.visible')

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"] > li`).then(items => {
        cy.wrap(items)
            .find('img')
            .should('have.length', items.length)
    })
})
