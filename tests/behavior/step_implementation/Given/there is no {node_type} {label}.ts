import {Given} from "@badeball/cypress-cucumber-preprocessor"
import {dasherize} from "inflection"
import {getRandomCanonicalNodeId} from "../../lib/getRandomCanonicalNodeId"
import {MockData} from "../../lib/MockData"

Given('there is no {string} {string}', (nodeType: string, label: string) => {
    const nodeId = getRandomCanonicalNodeId()
    MockData.removeNode(nodeId)

    cy.wrap(nodeId)
        .as(`${dasherize(nodeType.toLowerCase())}_node_${label}`)
})
