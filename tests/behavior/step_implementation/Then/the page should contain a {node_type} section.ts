import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the page should contain a {string} section', (nodeType: string) => {
    cy.get(`section[aria-label="${getNormalizedNodeType(nodeType)}"]`)
        .should('be.visible')
})
