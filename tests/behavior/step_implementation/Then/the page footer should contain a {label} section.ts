import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the page footer should contain a(n) {string} section', (label: string) => {
    cy.get(`footer h5`)
        .contains(label, {matchCase: false})
})
