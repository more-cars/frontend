import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user visits a page via {string}', (protocol: 'HTTP' | 'HTTPS') => {
    let baseUrl = Cypress.config('baseUrl') as string

    if (protocol === 'HTTP') {
        baseUrl = baseUrl.replace('https:', 'http:')
        baseUrl = baseUrl.replace(':4443', ':4000')
    } else if (protocol === 'HTTPS') {
        baseUrl = baseUrl.replace('http:', 'https:')
        baseUrl = baseUrl.replace(':4000', ':4443')
    }

    cy.visit(baseUrl + '/')
})
