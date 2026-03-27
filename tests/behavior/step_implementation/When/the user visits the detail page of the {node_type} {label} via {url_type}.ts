import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"
import {dasherize} from "inflection"

When('the user visits the detail page of the {string} {string} via {string}', (nodeType: string, label: string, urlType: 'Canonical URL') => {
    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${label}`).then(id => {
        if (urlType === 'Canonical URL') {
            cy.visit(`/${getNormalizedNodeTypePlural(nodeType)}-node-${id}`, {failOnStatusCode: false})
        }
    })
})
