import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('there should be license information displayed next to the lead image', () => {
    cy.get(`section[data-testid="lead-image"] figcaption`)
        .should('not.be.empty')
})
