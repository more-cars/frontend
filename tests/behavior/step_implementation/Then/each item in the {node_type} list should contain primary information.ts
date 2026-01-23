import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('each item in the {string} list should contain primary information', (nodeType: string) => {
    cy.get(`section[data-testid="${getNormalizedNodeType(nodeType)}-section"] [data-testid="prime-data"] li`)
        .should('have.length.at.least', 1)
})
