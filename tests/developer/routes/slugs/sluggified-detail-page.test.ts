import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import * as displayCompanyNode from "../../../../src/controllers/node-types/companies/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import type {ModelNode} from "../../../../src/models/types/ModelNode"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"

describe('Sluggified Detail Page', () => {
    test('for node type COMPANY', async () => {
        vi.spyOn(displayCompanyNode, 'displayNode')
            // @ts-expect-error TS2739 TS2739 TS2739
            .mockImplementation((req, res) => res.status(200).end())

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.COMPANY,
                fields: {},
            } as ModelNode))

        await supertestGet('/node-title-1234')

        expect(displayCompanyNode.displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
