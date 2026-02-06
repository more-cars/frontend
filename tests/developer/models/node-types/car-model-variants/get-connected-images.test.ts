import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/car-model-variants/findConnectedImages"
import {
    CarModelVariantHasImageRelationship
} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantHasImageRelationship"

describe('Collect connected IMAGES for the CAR MODEL VARIANT detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {name: "dummy"}} as unknown as CarModelVariantHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {name: "dummy"}} as unknown as CarModelVariantHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
