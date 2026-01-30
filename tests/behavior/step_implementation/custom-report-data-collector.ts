import {Before, BeforeStep} from "@badeball/cypress-cucumber-preprocessor"

Before(() => {
    cy.task('scenarioExecuted')
})

BeforeStep(() => {
    cy.task('stepExecuted')
})
