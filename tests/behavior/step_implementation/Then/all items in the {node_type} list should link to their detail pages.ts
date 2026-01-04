import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

// TODO how to determine whether the correct page is linked?
Then('all items in the {string} list should link to their detail pages', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"]`)
        .should('be.visible')

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"] > li`)
        .find('a')
        .should('be.visible')
})
