import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/car-model-variants/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {CarModelVariantHasMainImageRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantHasMainImageRelationship"

describe('Collect connected main IMAGE for the CAR MODEL VARIANT detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as CarModelVariantHasMainImageRelationship

        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
