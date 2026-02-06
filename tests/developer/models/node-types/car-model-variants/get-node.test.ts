import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/car-model-variants/findNodeById"
import type {CarModelVariantNode} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantNode"

describe('Collect node for the CAR MODEL VARIANT detail page', () => {
    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the CAR MODEL VARIANT exists', async () => {
        const node = {id: 1, name: "dummy 1"} as CarModelVariantNode
        vi.spyOn(CarModelVariantDataFacade, 'getNodeById').mockResolvedValue(node)

        const carModelVariant = await findNodeById(1)

        expect(carModelVariant?.id).toEqual(node.id)
        expect(carModelVariant?.name).toEqual(node.name)
    })
})
