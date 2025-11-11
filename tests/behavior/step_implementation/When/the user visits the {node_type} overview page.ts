import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user visits the {string} overview page', (nodeType: string) => {
    cy.visit('/brands')
})
