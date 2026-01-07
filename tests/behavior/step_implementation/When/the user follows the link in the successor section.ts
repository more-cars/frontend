import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user follows the link in the {string} successor section', (nodeType: string) => {
    cy.get("section[aria-label='car-model-successor'] a")
        .click()
})
