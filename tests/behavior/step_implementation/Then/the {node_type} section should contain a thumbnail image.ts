import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the {string} section should contain a thumbnail image', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"]`)
        .find('img')
        .should('be.visible')
})
