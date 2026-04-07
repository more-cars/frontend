import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('each item in the {string} list/section should contain a title', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"] > ul > li`).then(items => {
        cy.wrap(items)
            .find('a span')
            .should('not.be.empty')
    })
})
