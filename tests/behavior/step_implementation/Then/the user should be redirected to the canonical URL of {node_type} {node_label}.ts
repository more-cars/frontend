import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {dasherize} from "inflection"

Then('the user should be redirected to the canonical URL of {string} {string}', (nodeType: string, nodeLabel: string) => {
    cy.url()
        .should('match', /^(.*)-([0-9]+)$/)

    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${nodeLabel}`).then(nodeId => {
        cy.url()
            .should('contain', nodeId)
    })
})
