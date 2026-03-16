import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findConnectedCarModelVariant} from "../../../../../src/models/node-types/ratings/findConnectedCarModelVariant"
import {RatingForCarModelVariantRelationship} from "../../../../../src/data/node-types/ratings/types/RatingForCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANT for the RATING detail page', () => {
    test('when no CAR MODEL VARIANT is connected', async () => {
        vi.spyOn(RatingDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(null)

        expect(await findConnectedCarModelVariant(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RatingForCarModelVariantRelationship
        vi.spyOn(RatingDataFacade, 'getConnectedCarModelVariantNode').mockResolvedValue(data)

        expect(await findConnectedCarModelVariant(1))
            .toHaveProperty('id', 1)
    })
})
