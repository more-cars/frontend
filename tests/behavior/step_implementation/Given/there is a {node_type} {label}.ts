import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {MockData} from "../../lib/MockData"
import {dasherize} from "inflection"

Given('there is a {string} {string}', (nodeType: string, label: string) => {
    const nodeId = Math.ceil(Math.random() * 100000)
    MockData.addNode(nodeId)

    cy.wrap(nodeId)
        .as(`${dasherize(nodeType.toLowerCase())}_node_${label}`)
})
