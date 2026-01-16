import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"

When('the user visits page {int} of the {string} overview page via UI', (page: number, nodeType: string) => {
    const nodeTypeNormalized = getNormalizedNodeTypePlural(nodeType)

    cy.visit('/' + nodeTypeNormalized)

    if (page > 1) {
        for (let i = 1; i < page; i++) {
            cy.get('[aria-label="pagination"] [aria-label="next page"]')
                .click()
            cy.location('search')
                .should('contain', 'page=' + (i + 1))
        }
    }
})
