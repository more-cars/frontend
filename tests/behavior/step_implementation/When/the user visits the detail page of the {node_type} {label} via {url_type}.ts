import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"
import {dasherize} from "inflection"

When('the user visits the detail page of the {string} {string} via {string}', (nodeType: string, label: string, urlType: 'Canonical URL' | 'Short URL' | 'Node Type URL') => {
    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${label}`).then(id => {
        if (urlType === 'Canonical URL') {
            return `/${getNormalizedNodeTypePlural(nodeType)}-node-${id}`
        } else if (urlType === 'Short URL') {
            return `/${id}`
        } else if (urlType === 'Node Type URL') {
            return `/${getNormalizedNodeTypePlural(nodeType)}/${id}`
        } else if (urlType === 'Legacy URL') {
            return `/${getNormalizedNodeTypePlural(nodeType)}-node__${id}`
        } else {
            assert(false, `Unknown URL type "${urlType}"`)
        }
    }).then(targetUrl => {
        cy.wrap(targetUrl)
            .as(`target_url`)

        cy.visit(targetUrl, {failOnStatusCode: false})
    })
})
