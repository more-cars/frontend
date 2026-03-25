import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/companies/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/companies/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {Company} from "../../../../src/models/node-types/companies/types/Company"

describe('Companies', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/companies')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.COMPANY,
                fields: {},
            } as Company))

        await supertestGet('/company-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
