import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/car-model-variants/findConnectedMainImage"
import {CarModelVariantHasMainImageRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the CAR MODEL VARIANT detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as CarModelVariantHasMainImageRelationship
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
