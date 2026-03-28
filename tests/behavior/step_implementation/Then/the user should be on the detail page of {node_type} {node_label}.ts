import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {dasherize} from "inflection"

Then('the user should be on the detail page of {string} {string}', (nodeType: string, nodeLabel: string) => {
    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${nodeLabel}`).then(nodeId => {
        cy.get('tr[data-testid="id"] td')
            .last()
            .should('contain.text', nodeId)
    })
})
