import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/ratings/findConnectedCarModelVariant"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {RatingForCarModelVariantRelationship} from "../../../../../src/data/node-types/ratings/types/RatingForCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the RATING detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(RatingDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeCarModelVariant.data} as unknown as RatingForCarModelVariantRelationship

        vi.spyOn(RatingDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
