import {mockState} from "./mockState"
import {dasherize, underscore} from "inflection"

export function applyMockState(baseMock: any, operationId: string) {
    if (isNodeTypeOperation(operationId)) {
        const mockItems = []
        const nodeCount = getNodeCountForNodeType(operationId)

        for (let i = 0; i < nodeCount; i++) {
            mockItems.push(baseMock.data[0])
        }

        return {
            data: mockItems
        }
    }

    return baseMock
}

function isNodeTypeOperation(operationId: string) {
    return !(operationId.endsWith('Rel') || operationId.endsWith('ById'))
}

function getNodeCountForNodeType(operationId: string) {
    const nodeType = dasherize(underscore(operationId.replace('get', '')))
    const defaultNodeCount = 5
    const nodeCount = mockState.get(nodeType)

    return (nodeCount === undefined) ? defaultNodeCount : nodeCount
}
