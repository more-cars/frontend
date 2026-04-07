import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the {string} section should contain max {int} items', (nodeType: string, amount: number) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"]`)
        .find('li')
        .should('have.length.lte', amount)
})
