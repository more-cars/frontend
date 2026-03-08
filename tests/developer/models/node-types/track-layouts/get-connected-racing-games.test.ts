import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedRacingGames} from "../../../../../src/models/node-types/track-layouts/findConnectedRacingGames"
import {TrackLayoutIsFeaturedInRacingGameRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutIsFeaturedInRacingGameRelationship"

describe('Collect connected RACING GAMES for the TRACK LAYOUT detail page', () => {
    test('when no RACING GAMES are connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([])

        expect(await findConnectedRacingGames(1))
            .toHaveLength(0)
    })

    test('when there are RACING GAMES connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingGameNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as TrackLayoutIsFeaturedInRacingGameRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as TrackLayoutIsFeaturedInRacingGameRelationship,
        ])

        expect(await findConnectedRacingGames(1))
            .toHaveLength(2)
    })
})
