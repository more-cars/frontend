import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedCarModel} from "../../../../../src/models/node-types/car-model-variants/findConnectedCarModel"
import {CarModelVariantIsVariantOfRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantIsVariantOfRelationship"

describe('Collect connected CAR MODEL for the CAR MODEL VARIANT detail page', () => {
    test('when no CAR MODEL is connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedCarModelNode').mockResolvedValue(null)

        expect(await findConnectedCarModel(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as CarModelVariantIsVariantOfRelationship
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedCarModelNode').mockResolvedValue(data)

        expect(await findConnectedCarModel(1))
            .toHaveProperty('id', 1)
    })
})
