import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {convertStringToApiNodeType, convertStringToModelNodeType} from "../../../_toolbox/convertStringToNodeType"
import type {ModelNode} from "../../../../src/models/types/ModelNode"

describe('Redirecting legacy URLs', () => {
    test.each(
        getAllExpectedNodeTypes()
    )('for node type $0', async (nodeType) => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: convertStringToModelNodeType(nodeType),
                fields: {},
            } as ModelNode))

        const response = await supertestGet('/node-title__1234')

        expect(response.status)
            .to.equal(301)

        expect('location' in response.headers)
            .toBeTruthy()

        expect(response.headers['location'])
            .toEqual(convertStringToApiNodeType(nodeType) + '/' + 1234) // TODO expecting the canonical URL here, not the node type URL
    })
})
