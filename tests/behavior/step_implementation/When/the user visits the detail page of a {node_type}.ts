import {When} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"

When('the user visits the detail page of a {string}', (nodeType: string) => {
    cy.visit(`/${getNormalizedNodeTypePlural(nodeType)}/4711`, {failOnStatusCode: false})
})
