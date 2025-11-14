import {Given} from "@badeball/cypress-cucumber-preprocessor"

Given('there exists no {string} {string}', (nodeType: string, label: string) => {
    cy.wrap('-42')
        .as('label_' + label)
})
