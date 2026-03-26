import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedCarModel} from "../../../../../src/models/node-types/car-model-variants/findConnectedCarModel"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import {CarModelVariantIsVariantOfRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantIsVariantOfRelationship"

describe('Collect connected CAR MODEL for the CAR MODEL VARIANT detail page', () => {
    test('when no CAR MODEL is connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedCarModelNode').mockResolvedValue(null)

        expect(await findConnectedCarModel(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModel.data} as unknown as CarModelVariantIsVariantOfRelationship

        vi.spyOn(CarModelVariantDataFacade, 'getConnectedCarModelNode').mockResolvedValue(data)

        expect(await findConnectedCarModel(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
