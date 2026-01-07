import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {dasherize} from "inflection"
import {MockData} from "../../lib/MockData"

Given('the {string} {string} has no relationships/successor/predecessor', (nodeType: string, label: string) => {
    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${label}`).then(nodeId => {
        MockData.removeNodeRelationships(Number(nodeId))
    })
})
