import {DataTable, Then} from "@badeball/cypress-cucumber-preprocessor"

Then('following node type groups should be displayed', (data: DataTable) => {
    for (const row of data.hashes()) {
        console.log(row.group)

        cy.get(`[data-testid="node-type-group-section"] h2`)
            .contains(row.group, {matchCase: false})
    }
})
