import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the legal section should contain a link to the {string}', (target: string) => {
    switch (target) {
        case 'privacy':
            cy.get(`footer h2`)
                .contains('legal', {matchCase: false})
                .parent()
                .find('a')
                .contains('privacy', {matchCase: false})
                .should('have.attr', 'href', '/privacy')
            break
        case 'contact':
            cy.get(`footer h2`)
                .contains('legal', {matchCase: false})
                .parent()
                .find('a')
                .contains('contact', {matchCase: false})
                .should('have.attr', 'href', '/contact')
            break
        default:
            assert.fail(`"${target}" is not a valid target`)
    }
})
