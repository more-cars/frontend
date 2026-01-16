import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"

When('the user visits page {int} of the {string} overview page', (page: number, nodeType: string) => {
    const nodeTypeNormalized = getNormalizedNodeTypePlural(nodeType)

    cy.visit('/' + nodeTypeNormalized + '?page=' + page)
})
