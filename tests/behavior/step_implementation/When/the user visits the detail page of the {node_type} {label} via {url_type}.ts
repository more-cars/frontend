import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"
import {dasherize} from "inflection"

When('the user visits the detail page of the {string} {string} via {string}', (nodeType: string, label: string, urlType: 'Canonical URL' | 'Short URL' | 'Node Type URL') => {
    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${label}`).then(id => {
        if (urlType === 'Canonical URL') {
            cy.visit(`/${getNormalizedNodeTypePlural(nodeType)}-node-${id}`, {failOnStatusCode: false})
        } else if (urlType === 'Short URL') {
            cy.visit(`/${id}`, {failOnStatusCode: false})
        } else if (urlType === 'Node Type URL') {
            cy.visit(`/${getNormalizedNodeTypePlural(nodeType)}/${id}`, {failOnStatusCode: false})
        } else if (urlType === 'Legacy URL') {
            cy.visit(`/${getNormalizedNodeTypePlural(nodeType)}-node__${id}`, {failOnStatusCode: false})
        } else {
            assert(false, `Unknown URL type "${urlType}"`)
        }
    })
})
