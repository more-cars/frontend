import {DataTable, Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the fact sheet should display an entry for each of the following properties', (data: DataTable) => {
    for (const row of data.hashes()) {
        cy.get(`[data-testid="${row["_property_"]}"] td`)
            .first()
            .should('be.visible')
            .and('not.be.empty')

        cy.get(`[data-testid="${row["_property_"]}"] td`)
            .last()
            .should('be.visible')
    }
})
