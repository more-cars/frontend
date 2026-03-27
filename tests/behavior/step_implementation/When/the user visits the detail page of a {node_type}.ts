import {When} from "@badeball/cypress-cucumber-preprocessor"
import {MockData} from "../../lib/MockData"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"

When('the user visits the detail page of a {string}', (nodeType: string) => {
    MockData.addNode(12345678, nodeType)

    cy.visit(`/${getNormalizedNodeTypePlural(nodeType)}/12345678`, {failOnStatusCode: false})
})
