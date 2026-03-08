import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedRacingGames} from "../../../../../src/models/node-types/car-model-variants/findConnectedRacingGames"
import {CarModelVariantIsFeaturedInRacingGameRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantIsFeaturedInRacingGameRelationship"

describe('Collect connected RACING GAMES for the CAR MODEL VARIANT detail page', () => {
    test('when no RACING GAMES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([])

        expect(await findConnectedRacingGames(1))
            .toHaveLength(0)
    })

    test('when there are RACING GAMES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as CarModelVariantIsFeaturedInRacingGameRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as CarModelVariantIsFeaturedInRacingGameRelationship,
        ])

        expect(await findConnectedRacingGames(1))
            .toHaveLength(2)
    })
})
