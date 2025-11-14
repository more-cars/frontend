import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('a message should inform the user that the {string} node does not exist', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-not-found"]`)
        .should('be.visible')
})
