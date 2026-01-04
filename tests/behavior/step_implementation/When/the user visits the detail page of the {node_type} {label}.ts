import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"
import {dasherize} from "inflection"

When('the user visits the detail page of the {string} {string}', (nodeType: string, label: string) => {
    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${label}`).then(id => {
        cy.visit(`/${getNormalizedNodeTypePlural(nodeType)}/${id}`, {failOnStatusCode: false})
    })
})
