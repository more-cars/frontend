import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user follows the link in the {string} section', (nodeType: string) => {
    cy.get("section[aria-label='" + nodeType.toLowerCase() + "'] a")
        .click()
})
