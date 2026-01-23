import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the {string} list should be sorted by {string} in {string} order', (nodeType: string, property: string, sortDirection: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"]`)
        .should('be.visible')

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-section"] > ul > li [aria-label="${property}"]`)
        .should((items) => {
            const actualSorting = [...items].map(el => el.innerText.trim().toLowerCase())
            const expectedSorting = [...actualSorting].sort((a, b) => a.localeCompare(b))

            expect(actualSorting, 'items are sorted correctly')
                .to.deep.equal(expectedSorting)
        })
})
