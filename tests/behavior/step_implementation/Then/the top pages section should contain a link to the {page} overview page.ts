import {Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeTypePlural} from "../../lib/getNormalizedNodeTypePlural"

Then('the top pages section should contain a link to the {string} overview page', (target: string) => {
    cy.get(`footer div p`)
        .contains('top pages', {matchCase: false})
        .parent()
        .find('a')
        .contains(target, {matchCase: false})
        .should('have.attr', 'href', `/${getNormalizedNodeTypePlural(target)}`)
})
