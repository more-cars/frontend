import {getNormalizedNodeTypePlural} from "./getNormalizedNodeTypePlural"
import {getMockServerBaseUrl} from "./getMockServerBaseUrl"

/**
 * These functions allow a Cypress test (e.g. a "Given" step) to manipulate the data in the API mock server.
 */
export const MockData = {
    reset() {
        const url = `${getMockServerBaseUrl()}/reset`
        cy.request('POST', url)
    },

    setNodeCount(nodeType: string, count: number) {
        const url = `${getMockServerBaseUrl()}/node-collection/${getNormalizedNodeTypePlural(nodeType)}/${count}`
        cy.request('POST', url)
    },

    addNode(nodeId: number, nodeType: string) {
        let url = `${getMockServerBaseUrl()}/node-state/${nodeId}/true`
        cy.request('POST', url)

        url = `${getMockServerBaseUrl()}/node-type/${nodeId}/${nodeType}`
        cy.request('POST', url)
    },

    removeNode(nodeId: number) {
        const url = `${getMockServerBaseUrl()}/node-state/${nodeId}/false`
        cy.request('POST', url)
    },

    removeNodeRelationships(nodeId: number) {
        const url = `${getMockServerBaseUrl()}/node-relationships/${nodeId}/0`
        cy.request('POST', url)
    },
}
