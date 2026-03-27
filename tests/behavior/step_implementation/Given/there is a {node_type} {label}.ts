import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {dasherize} from "inflection"
import {getRandomCanonicalNodeId} from "../../lib/getRandomCanonicalNodeId"
import {MockData} from "../../lib/MockData"

Given('there is a {string} {string}', (nodeType: string, label: string) => {
    const nodeId = getRandomCanonicalNodeId()
    MockData.addNode(nodeId, nodeType)

    cy.wrap(nodeId)
        .as(`${dasherize(nodeType.toLowerCase())}_node_${label}`)
})
