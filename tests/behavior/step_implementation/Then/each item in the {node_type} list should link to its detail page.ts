import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

// TODO how to determine whether the correct page is linked?
Then('each item in the {string} list should link to its detail page', (nodeType: string) => {
    cy.get(`section[data-testid="${getNormalizedNodeType(nodeType)}-section"]`)
        .should('be.visible')

    cy.get(`section[data-testid="${getNormalizedNodeType(nodeType)}-section"] li`)
        .find('a')
        .should('be.visible')
})
