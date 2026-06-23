import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user visits a {string}', (pageType: string) => {
    switch (pageType.toLowerCase()) {
        case 'start page':
            cy.visit('/')
            break
        case 'overview page':
            cy.visit('/car-models')
            break
        case 'detail page':
            cy.visit('/car-models/12345678')
            break
        case 'error page':
            cy.visit('/car-models?page=99999', {failOnStatusCode: false})
            break
        default:
            assert.fail(`"${pageType}" is not a valid target`)
    }
})
