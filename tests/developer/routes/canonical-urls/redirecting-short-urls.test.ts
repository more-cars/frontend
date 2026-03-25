import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {convertStringToModelNodeType} from "../../../_toolbox/convertStringToNodeType"
import type {ModelNode} from "../../../../src/models/types/ModelNode"
import * as getNodeTitle from "../../../../src/models/getNodeTitle"

describe('Redirecting short URLs', () => {
    test.each(
        getAllExpectedNodeTypes()
    )('for node type $0', async (nodeType) => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: convertStringToModelNodeType(nodeType),
                fields: {},
            } as ModelNode))

        vi.spyOn(getNodeTitle, 'getNodeTitle')
            .mockImplementation(() => ('Node Title'))

        const response = await supertestGet('/1234')

        expect(response.status)
            .to.equal(301)

        expect('location' in response.headers)
            .toBeTruthy()

        expect(response.headers['location'])
            .toEqual('node-title-1234')
    })
})
