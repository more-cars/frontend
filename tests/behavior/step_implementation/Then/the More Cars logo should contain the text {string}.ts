import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the More Cars logo should contain the text {string}', (text: string) => {
    const parts = text.split(' ')

    parts.forEach(part => {
        cy.get(`body header .logo`)
            .should('contain.text', part)
    })
})
