import {describe, expect, test, vi} from "vitest"
import {getAllNodeTypeInformation} from "../../../../src/controllers/start-page/getAllNodeTypeInformation"
import {getAllExpectedNodeTypes} from "../../../_toolbox/getAllExpectedNodeTypes"
import {convertStringToControllerNodeType} from "../../../_toolbox/convertStringToNodeType"
import * as node from "../../../../src/data/nodes/getTotalNodeCount"

describe('All node types are represented on the start page', () => {
    test('information for each available node type is collected', async () => {
        vi.spyOn(node, 'getTotalNodeCount')
            .mockImplementation(async () => 10)

        const allNodeTypeInformation = await getAllNodeTypeInformation()

        getAllExpectedNodeTypes().forEach((nodeType) => {
            expect(allNodeTypeInformation.get(convertStringToControllerNodeType(nodeType)), `Node type "${nodeType}" missing`)
                .not.toBeUndefined()
        })
    })
})
