import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page footer should contain a(n) {string} section', (label: string) => {
    cy.get(`footer h2`)
        .contains(label, {matchCase: false})
})
