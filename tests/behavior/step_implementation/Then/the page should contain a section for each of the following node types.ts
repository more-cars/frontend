import {DataTable, Then} from "@badeball/cypress-cucumber-preprocessor"
import {getNormalizedNodeType} from "../../lib/getNormalizedNodeType"

Then('the page should contain a section for each of the following node types', (data: DataTable) => {
    for (const row of data.hashes()) {
        cy.get(`[data-testid="${getNormalizedNodeType(row["_node_type_"])}"]`)
            .should('be.visible')
    }
})
