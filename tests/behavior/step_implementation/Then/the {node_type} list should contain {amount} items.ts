import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the {string} list should contain {int} items', (nodeType: string, amount: number) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"] > ul > li`)
        .should('have.length', amount)
})
