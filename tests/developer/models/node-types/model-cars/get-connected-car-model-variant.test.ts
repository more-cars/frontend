import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/model-cars/findConnectedCarModelVariant"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {ModelCarIsScaleModelOfCarModelVariantRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarIsScaleModelOfCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the MODEL CAR detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModelVariant.data} as unknown as ModelCarIsScaleModelOfCarModelVariantRelationship

        vi.spyOn(ModelCarDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
