import {Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the request should not have failed', () => {
    // We don't have to do anything here.
    // When the request in question failed Cypress would have already failed the respective test step.
    // This step here only exists to allow the test scenario to be explicit about the intended outcome.
})
