import {When} from "@badeball/cypress-cucumber-preprocessor"
import {dasherize} from "inflection"

When('the user follows one of the links in the {string} list', (nodeType: string) => {
    cy.get("section[data-testid='" + dasherize(nodeType.toLowerCase()) + "-section'] > ul > li a")
        .first()
        .click()
})
