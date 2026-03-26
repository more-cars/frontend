import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedRacingGames} from "../../../../../src/models/node-types/car-model-variants/findConnectedRacingGames"
import {CarModelVariantIsFeaturedInRacingGameRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantIsFeaturedInRacingGameRelationship"
import {FakeRacingGame} from "../../../../_toolbox/fixtures/node-types/FakeRacingGame"

describe('Collect connected RACING GAMES for the CAR MODEL VARIANT detail page', () => {
    test('when no RACING GAMES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([])

        expect(await findConnectedRacingGames(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING GAMES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingGame.data} as unknown as CarModelVariantIsFeaturedInRacingGameRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingGame.data} as unknown as CarModelVariantIsFeaturedInRacingGameRelationship,
        ])

        expect(await findConnectedRacingGames(12345678))
            .toHaveLength(2)
    })
})
