import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/racing-games/findConnectedCarModelVariants"
import {RacingGameFeaturesCarModelVariantRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameFeaturesCarModelVariantRelationship"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"

describe('Collect connected CAR MODEL VARIANTS for the RACING GAME detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeCarModelVariant.data} as unknown as RacingGameFeaturesCarModelVariantRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeCarModelVariant.data} as unknown as RacingGameFeaturesCarModelVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(2)
    })
})
