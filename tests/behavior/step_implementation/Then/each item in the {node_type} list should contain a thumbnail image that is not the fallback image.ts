import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('each item in the {string} list/section should contain a thumbnail image that is not the fallback image', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"] > ul > li`).then(items => {
        cy.wrap(items)
            .find('img')
            .should('not.have.attr', 'src', '/g/no-image.webp')
    })
})
