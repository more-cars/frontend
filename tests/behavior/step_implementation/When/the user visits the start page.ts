import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user visits the start page', () => {
    cy.visit('/')
})
