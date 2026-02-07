import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the More Cars logo should contain the text {string}', (text: string) => {
    cy.get(`body header .logo`)
        .should('contain.text', text)
})
