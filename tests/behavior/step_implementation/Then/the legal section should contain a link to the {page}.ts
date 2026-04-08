import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the legal section should contain a link to the {string}', (target: string) => {
    switch (target) {
        case 'privacy':
            cy.get(`footer div p`)
                .contains('legal', {matchCase: false})
                .parent()
                .find('a')
                .contains('privacy', {matchCase: false})
                .should('have.attr', 'href', '/privacy')
            break
        case 'contact':
            cy.get(`footer div p`)
                .contains('legal', {matchCase: false})
                .parent()
                .find('a')
                .contains('contact', {matchCase: false})
                .should('have.attr', 'href', '/contact')
            break
        case 'terms':
            cy.get(`footer div p`)
                .contains('legal', {matchCase: false})
                .parent()
                .find('a')
                .contains('terms', {matchCase: false})
                .should('have.attr', 'href', '/terms-of-use')
            break
        default:
            assert.fail(`"${target}" is not a valid target`)
    }
})
