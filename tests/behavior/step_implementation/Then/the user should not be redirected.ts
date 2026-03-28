import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the user should not be redirected', () => {
    cy.get('@target_url').then(url => {
        cy.location('pathname')
            .should('eq', url)
    })
})
