import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the page should contain a message, informing the user that there is no such {string}', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-not-found"]`)
        .should('be.visible')
})
