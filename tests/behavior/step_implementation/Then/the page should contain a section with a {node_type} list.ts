import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the page should contain a section with a {string} list', (nodeType: string) => {
    cy.get(`section[data-testid="${getNormalizedNodeType(nodeType)}-section"]`)
        .should('be.visible')

    cy.get(`section[data-testid="${getNormalizedNodeType(nodeType)}-section"] ul li`)
        .should('have.length.at.least', 1)
})
