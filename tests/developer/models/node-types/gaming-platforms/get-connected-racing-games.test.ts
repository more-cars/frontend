import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findConnectedRacingGames} from "../../../../../src/models/node-types/gaming-platforms/findConnectedRacingGames"
import {GamingPlatformFeaturesRacingGameRelationship} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformFeaturesRacingGameRelationship"
import {FakeRacingGame} from "../../../../_toolbox/fixtures/node-types/FakeRacingGame"

describe('Collect connected RACING GAMES for the GAMING PLATFORM detail page', () => {
    test('when no RACING GAMES are connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([])

        expect(await findConnectedRacingGames(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING GAMES connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingGame.data} as unknown as GamingPlatformFeaturesRacingGameRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingGame.data} as unknown as GamingPlatformFeaturesRacingGameRelationship,
        ])

        expect(await findConnectedRacingGames(12345678))
            .toHaveLength(2)
    })
})
