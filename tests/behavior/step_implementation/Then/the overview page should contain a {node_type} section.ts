import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the overview page should contain a {string} section', (nodeType: string) => {
    cy.get(`section[data-testid="${getNormalizedNodeType(nodeType)}-section"]`)
        .should('be.visible')
})
