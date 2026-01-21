import {DataTable, Then} from "@badeball/cypress-cucumber-preprocessor"

Then('the fact sheet should display an entry for each of the following properties', (data: DataTable) => {
    for (const row of data.hashes()) {
        cy.get(`[test-dataid="${row["_property_"]}"] td`)
            .first()
            .should('be.visible')
            .and('not.be.empty')

        cy.get(`[test-dataid="${row["_property_"]}"] td`)
            .eq(1)
            .should('be.visible')
    }
})
