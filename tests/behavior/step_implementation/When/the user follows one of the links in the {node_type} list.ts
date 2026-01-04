import {When} from "@badeball/cypress-cucumber-preprocessor"
import {pluralize} from "inflection"

When('the user follows one of the links in the {string} list', (nodeType: string) => {
    cy.get("section[aria-label='" + pluralize(nodeType.toLowerCase()) + "'] ul li a")
        .first()
        .click()
})
