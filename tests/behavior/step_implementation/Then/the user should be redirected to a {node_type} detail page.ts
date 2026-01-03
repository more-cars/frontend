import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural.ts"

Then('the user should be redirected to a {string} detail page', (nodeType: string) => {
    cy.url()
        .should('include', getNormalizedNodeTypePlural(nodeType))
})
