import {describe, expect, test, vi} from "vitest"
import * as nodeModule from "../../../../src/controllers/node-types/car-model-variants/displayAllNodes"
import {supertestGet} from "../../supertestGet"
import * as node from "../../../../src/controllers/node-types/car-model-variants/displayNode"
import {NodeModelFacade} from "../../../../src/models/NodeModelFacade"
import {ModelNodeType} from "../../../../src/models/types/ModelNodeType"
import type {CarModelVariant} from "../../../../src/models/node-types/car-model-variants/types/CarModelVariant"

describe('Car Model Variants', () => {
    test('Show Node Overview Page', async () => {
        const spy = vi.spyOn(nodeModule, 'displayAllNodes')

        await supertestGet('/car-model-variants')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('Show Node Detail Page', async () => {
        const spy = vi.spyOn(node, 'displayNode')

        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => ({
                type: ModelNodeType.CAR_MODEL_VARIANT,
                fields: {},
            } as CarModelVariant))

        await supertestGet('/car-model-variant-node-12345678')

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
