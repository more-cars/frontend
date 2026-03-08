import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/racing-games/findConnectedCarModelVariants"
import {RacingGameFeaturesCarModelVariantRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameFeaturesCarModelVariantRelationship"

describe('Collect connected CAR MODEL VARIANTS for the RACING GAME detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RacingGameFeaturesCarModelVariantRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RacingGameFeaturesCarModelVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(1))
            .toHaveLength(2)
    })
})
