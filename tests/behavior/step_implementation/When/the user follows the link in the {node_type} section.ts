import {When} from "@badeball/cypress-cucumber-preprocessor"
import {dasherize} from "inflection"

When('the user follows the link in the {string} section', (nodeType: string) => {
    cy.get("section[data-testid='" + dasherize(nodeType.toLowerCase()) + "-section'] a")
        .click()
})
