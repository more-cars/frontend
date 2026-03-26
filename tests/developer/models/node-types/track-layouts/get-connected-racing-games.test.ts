import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedRacingGames} from "../../../../../src/models/node-types/track-layouts/findConnectedRacingGames"
import {FakeRacingGame} from "../../../../_toolbox/fixtures/node-types/FakeRacingGame"
import {TrackLayoutIsFeaturedInRacingGameRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutIsFeaturedInRacingGameRelationship"

describe('Collect connected RACING GAMES for the TRACK LAYOUT detail page', () => {
    test('when no RACING GAMES are connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([])

        expect(await findConnectedRacingGames(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING GAMES connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingGame.data} as unknown as TrackLayoutIsFeaturedInRacingGameRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingGame.data} as unknown as TrackLayoutIsFeaturedInRacingGameRelationship,
        ])

        expect(await findConnectedRacingGames(12345678))
            .toHaveLength(2)
    })
})
