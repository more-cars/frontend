import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {convertStringToApiNodeType} from "../../../_toolbox/convertStringToNodeType"

describe('Redirecting short URLs', () => {
    test.each(
        getAllExpectedNodeTypes()
    )('for node type $0', async (nodeType) => {
        vi.spyOn(NodeModelFacade, 'getNodeTypeOfNode')
            .mockImplementation(async () => convertStringToApiNodeType(nodeType))

        const response = await supertestGet('/1234')

        expect(response.status)
            .to.equal(301)

        expect('location' in response.headers)
            .toBeTruthy()

        expect(response.headers['location'])
            .toEqual(convertStringToApiNodeType(nodeType) + '/' + 1234) // TODO expecting the canonical URL here, not the node type URL
    })
})
