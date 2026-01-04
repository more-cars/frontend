import {dasherize, underscore} from "inflection"
import {mockState, nodeRelationships, nodeState} from "./mockState"
import {Context} from "openapi-backend"

export function getResponseMock(context: Context, req: any) {
    const operationId = context.operation.operationId || 'UNKNOWN'

    if (isNodeTypeOperation(operationId)) {
        const mockItems = []
        const nodeCount = getNodeCountForNodeType(operationId)

        for (let i = 0; i < nodeCount; i++) {
            const mockItem = context.api.mockResponseForOperation(operationId, {code: Number(200)})
            mockItems.push(mockItem.mock.data[0])
        }

        return {
            data: mockItems
        }
    }

    if (isNodeOperation(operationId)) {
        const nodeId = Number(req.url.split('/')[2])

        if (!isNodeActive(nodeId)) {
            return null
        }
    }

    if (isNodeRelationshipOperation(operationId)) {
        const nodeId = Number(req.url.split('/')[2])
        const mockItem = context.api.mockResponseForOperation(operationId, {code: Number(200)}).mock

        if (Array.isArray(mockItem.data)) {
            const mockItems = []

            let relationshipCount = nodeRelationships.get(nodeId)
            if (relationshipCount === undefined) {
                relationshipCount = 3
            }

            for (let i = 0; i < relationshipCount; i++) {
                mockItems.push(mockItem.data[0])
            }

            return {
                data: mockItems
            }
        } else {
            return {
                data: mockItem.data
            }
        }
    }

    return context.api.mockResponseForOperation(operationId, {code: Number(200)}).mock
}

function isNodeTypeOperation(operationId: string) {
    return !(operationId.endsWith('Rel') || operationId.endsWith('ById'))
}

function isNodeOperation(operationId: string) {
    return operationId.endsWith('ById')
}

function isNodeRelationshipOperation(operationId: string) {
    return operationId.endsWith('Rel')
}

function getNodeCountForNodeType(operationId: string) {
    const nodeType = dasherize(underscore(operationId.replace('get', '')))
    const defaultNodeCount = 5
    const nodeCount = mockState.get(nodeType)

    return (nodeCount === undefined) ? defaultNodeCount : nodeCount
}

function isNodeActive(nodeId: number) {
    const nodeIsActive = nodeState.get(nodeId)

    return (nodeIsActive === undefined) ? true : nodeIsActive
}