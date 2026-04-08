import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user visits a page', () => {
    cy.visit('/')
})
