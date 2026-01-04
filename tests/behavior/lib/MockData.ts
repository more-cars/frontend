import {getNormalizedNodeTypePlural} from "./getNormalizedNodeTypePlural"
import {getMockServerBaseUrl} from "./getMockServerBaseUrl"

/**
 * These functions allow a Cypress test (e.g. a "Given" step) to manipulate the data in the API mock server.
 */
export abstract class MockData {
    static setNodeCount(nodeType: string, count: number) {
        const url = `${getMockServerBaseUrl()}/node-type/${getNormalizedNodeTypePlural(nodeType)}/${count}`
        cy.request('POST', url)
    }
}
