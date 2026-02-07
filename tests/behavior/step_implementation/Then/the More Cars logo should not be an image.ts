import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the More Cars logo should not be an image', () => {
    cy.get(`body header .logo img`)
        .should('not.exist')

    cy.get(`body header img.logo`)
        .should('not.exist')
})
