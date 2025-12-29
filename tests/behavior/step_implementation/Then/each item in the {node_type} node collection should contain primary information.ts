import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('all items in the {string} list should contain primary information', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"]`)
        .should('be.visible')

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"] > li ul[aria-label="Primary Information"]`)
        .should('be.visible')

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"] > li ul[aria-label="Primary Information"] li`)
        .should('have.length.at.least', 1)
})
