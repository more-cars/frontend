import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"

When('the user visits the detail page of the {string} {string}', (nodeType: string, label: string) => {
    cy.get('@label_' + label).then(id => {
        const nodeTypeNormalized = getNormalizedNodeTypePlural(nodeType)

        cy.visit(`/${nodeTypeNormalized}/${id}`, {failOnStatusCode: false})
    })
})
