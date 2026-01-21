import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the photo section should contain a fallback image', () => {
    cy.get(`section[data-testid="lead-image"] img`)
        .should('have.attr', 'src')
        .and('include', 'no-image.webp')
})
