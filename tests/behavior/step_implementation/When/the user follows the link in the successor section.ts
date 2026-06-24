import {When} from "@badeball/cypress-cucumber-preprocessor"

When('the user follows the link in the {string} successor section', (_nodeType: string) => {
    cy.get("section[data-testid='successor-section'] a")
        .click()
})
