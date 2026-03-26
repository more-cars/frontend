import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/prices/findConnectedCarModelVariant"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {PriceForCarModelVariantRelationship} from "../../../../../src/data/node-types/prices/types/PriceForCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the PRICE detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(PriceDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModelVariant.data} as unknown as PriceForCarModelVariantRelationship

        vi.spyOn(PriceDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
