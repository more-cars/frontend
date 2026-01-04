import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the {string} section should contain primary information', (nodeType: string) => {
    cy.get(`section[aria-label="${getNormalizedNodeType(nodeType)}"] [aria-label="Primary Information"]`)
        .should('be.visible')

    cy.get(`section[aria-label="${getNormalizedNodeType(nodeType)}"] [aria-label="Primary Information"] li`)
        .should('have.length.at.least', 1)
})
