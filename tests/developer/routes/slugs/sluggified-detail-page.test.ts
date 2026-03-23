import {describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import * as displayCompanyNode from "../../../../src/controllers/node-types/companies/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ApiNodeType} from "../../../../src/data/types/ApiNodeType"

describe('Sluggified Detail Page', () => {
    test('for node type COMPANY', async () => {
        vi.spyOn(displayCompanyNode, 'displayNode')
            // @ts-expect-error TS2739 TS2739 TS2739
            .mockImplementation((req, res) => res.status(200).end())

        vi.spyOn(NodeModelFacade, 'getNodeTypeOfNode')
            .mockImplementation(async () => ApiNodeType.COMPANY)

        await supertestGet('/node-title-1234')

        expect(displayCompanyNode.displayNode)
            .toHaveBeenCalledTimes(1)
    })
})
