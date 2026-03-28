import {dasherize, underscore} from "inflection"
import {Context} from "openapi-backend"
import {mockState, nodeRelationships, nodeState, typeOfNode} from "./mockState"
import {getRandomCanonicalNodeId} from "./getRandomCanonicalNodeId"

export function getResponseMock(context: Context, req: { url: string, query: { page: number } }) {
    const operationId = context.operation.operationId || 'UNKNOWN'

    if (isNodeTypeOperation(operationId)) {
        const nodeCollectionResponseMock = context.api.mockResponseForOperation(operationId, {code: Number(200)})

        const page = req.query.page || 1
        const nodeCount = getNodeCountForNodeType(operationId)
        const visibleNodes = Math.min(nodeCount - ((page - 1) * 100), 100)

        const mockedNodes = []
        const nodeMock = nodeCollectionResponseMock.mock.data.pop()

        for (let i = 0; i < visibleNodes; i++) {
            const modifiedNode = structuredClone(nodeMock)
            modifiedNode.id = getRandomCanonicalNodeId()
            mockedNodes.push(modifiedNode)
        }

        nodeCollectionResponseMock.mock.data = mockedNodes
        nodeCollectionResponseMock.mock.meta.page.total_nodes = nodeCount

        return nodeCollectionResponseMock.mock
    }

    if (isGenericNodeOperation(operationId)) {
        const nodeId = Number(req.url.split('/')[2])
        const nodeType = typeOfNode.get(nodeId)

        if (!nodeType) {
            return null
        }

        const nodeMock = context.api.mockResponseForOperation("get" + nodeType + "ById", {code: Number(200)})

        return nodeMock.mock
    }

    if (isNodeOperation(operationId)) {
        const nodeId = Number(req.url.split('/')[2])

        if (!isNodeActive(nodeId)) {
            return null
        }

        const nodeMock = context.api.mockResponseForOperation(operationId, {code: Number(200)})
        nodeMock.mock.id = nodeId

        return nodeMock.mock
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
            const relationshipCount = nodeRelationships.get(nodeId)

            if (relationshipCount === undefined || relationshipCount > 0) {
                return {
                    data: mockItem.data
                }
            } else {
                return
            }
        }
    }

    return context.api.mockResponseForOperation(operationId, {code: Number(200)}).mock
}

function isNodeTypeOperation(operationId: string) {
    return !(operationId.endsWith('Rel') || operationId.endsWith('ById'))
}

function isGenericNodeOperation(operationId: string) {
    return operationId === 'getNodeById'
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