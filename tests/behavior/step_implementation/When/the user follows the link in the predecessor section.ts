import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user follows the link in the {string} predecessor section', (nodeType: string) => {
    cy.get("section[aria-label='car-models-predecessor'] a")
        .click()
})
