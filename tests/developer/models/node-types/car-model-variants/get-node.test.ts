import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/car-model-variants/findNodeById"
import type {CarModelVariantNode} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the CAR MODEL VARIANT detail page', () => {
    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the CAR MODEL VARIANT exists', async () => {
        const node = {type: DataNodeType.CAR_MODEL_VARIANT, data: {id: 1, name: "dummy 1"}} as CarModelVariantNode
        vi.spyOn(CarModelVariantDataFacade, 'getNodeById').mockResolvedValue(node)

        const carModelVariant = await findNodeById(1)

        expect(carModelVariant?.fields.id).toEqual(node.data.id)
        expect(carModelVariant?.fields.name).toEqual(node.data.name)
    })
})
