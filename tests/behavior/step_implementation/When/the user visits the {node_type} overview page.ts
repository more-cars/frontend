import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"

When('the user visits the {string} overview page', (nodeType: string) => {
    const nodeTypeNormalized = getNormalizedNodeTypePlural(nodeType)

    cy.visit('/' + nodeTypeNormalized)
})
