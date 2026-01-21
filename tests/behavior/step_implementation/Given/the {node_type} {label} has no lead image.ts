import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {MockData} from "../../lib/MockData"
import {dasherize} from "inflection"

Given('the {string} {string} has no lead image', (nodeType: string, label: string) => {
    cy.get(`@${dasherize(nodeType.toLowerCase())}_node_${label}`).then(nodeId => {
        MockData.removeNodeRelationships(Number(nodeId))
    })
})
