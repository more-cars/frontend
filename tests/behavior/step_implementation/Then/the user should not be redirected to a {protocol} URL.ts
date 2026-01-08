import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the user should not be redirected to a {string} URL', (protocol: 'HTTP' | 'HTTPS') => {
    if (protocol === 'HTTP') {
        cy.location('origin').should('not.contain', 'http:')
    } else if (protocol === 'HTTPS') {
        cy.location('origin').should('not.contain', 'https:')
    }
})
