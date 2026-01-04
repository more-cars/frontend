import {getNormalizedNodeTypePlural} from "./getNormalizedNodeTypePlural"
import {getMockServerBaseUrl} from "./getMockServerBaseUrl"

/**
 * These functions allow a Cypress test (e.g. a "Given" step) to manipulate the data in the API mock server.
 */
export abstract class MockData {
    static reset() {
        const url = `${getMockServerBaseUrl()}/reset`
        cy.request('POST', url)
    }

    static setNodeCount(nodeType: string, count: number) {
        const url = `${getMockServerBaseUrl()}/node-type/${getNormalizedNodeTypePlural(nodeType)}/${count}`
        cy.request('POST', url)
    }

    static addNode(nodeId: number) {
        const url = `${getMockServerBaseUrl()}/node-state/${nodeId}/true`
        cy.request('POST', url)
    }

    static removeNode(nodeId: number) {
        const url = `${getMockServerBaseUrl()}/node-state/${nodeId}/false`
        cy.request('POST', url)
    }

    static removeNodeRelationships(nodeId: number) {
        const url = `${getMockServerBaseUrl()}/node-relationships/${nodeId}/0`
        cy.request('POST', url)
    }
}
