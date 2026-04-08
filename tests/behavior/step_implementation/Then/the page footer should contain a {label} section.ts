import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page footer should contain a {string} section', (label: string) => {
    cy.get(`footer div p`)
        .contains(label, {matchCase: false})
})
