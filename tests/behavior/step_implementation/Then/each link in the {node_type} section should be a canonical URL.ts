import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('each link in the {string} section should be a canonical URL', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"] a`)
        .should('have.length.greaterThan', 0)

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"] a`).then(links => {
        links.each((index, link) => {
            cy.wrap(isCanonicalUrl(link.getAttribute('href') || ''))
                .should('be.true')
        })
    })
})

function isCanonicalUrl(path: string) {
    const match = path.match(/^(.*)-([0-9]+)$/)

    return !!match
}
