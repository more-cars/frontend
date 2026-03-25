import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/model-car-brands/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/model-car-brands/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {ModelCarBrand} from "../../../../src/models/node-types/model-car-brands/types/ModelCarBrand"

describe('Model Car Brands', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/model-car-brands')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.MODEL_CAR_BRAND,
                fields: {},
            } as ModelCarBrand))

        await supertestGet('/model-car-brand-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
