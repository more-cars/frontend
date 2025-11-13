import {DataTable, Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the fact sheet should display an entry for each of the following properties', (data: DataTable) => {
    for (const row of data.hashes()) {
        cy.get(`[aria-label="${row["_property_"]}"]`)
            .should('be.visible')
    }
})
