import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the More Cars logo should link to the start page', () => {
    cy.get(`body header .logo a`).then(a => {
        assert.strictEqual(
            a.attr('href'),
            '/',
            `link is supposed to be '/', but is ${a.attr('href')}`,
        )
    })
})
