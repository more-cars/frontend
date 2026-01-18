import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('all {string}s in the list should be unique', (nodeType: string) => {
    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"]`)
        .should('be.visible')

    cy.get(`[data-testid="${getNormalizedNodeType(nodeType)}-list"] > li`).then(items => {
        const ids = [...items].map(item => item.getAttribute('data-testid')) as string[]
        const deduplicatedIds = removeDuplicates(ids)
        cy.wrap(ids)
            .should('have.length', deduplicatedIds.length)
    })
})

export function removeDuplicates(input: Array<string>) {
    // creating a SET automatically removes the duplicates
    const inputSet = new Set(input)

    return [...inputSet]
}
