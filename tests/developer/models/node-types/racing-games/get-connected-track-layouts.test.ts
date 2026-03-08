import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedTrackLayouts} from "../../../../../src/models/node-types/racing-games/findConnectedTrackLayouts"
import {RacingGameFeaturesTrackLayoutRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameFeaturesTrackLayoutRelationship"

describe('Collect connected TRACK LAYOUTS for the RACING GAME detail page', () => {
    test('when no TRACK LAYOUTS are connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([])

        expect(await findConnectedTrackLayouts(1))
            .toHaveLength(0)
    })

    test('when there are TRACK LAYOUTS connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RacingGameFeaturesTrackLayoutRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RacingGameFeaturesTrackLayoutRelationship,
        ])

        expect(await findConnectedTrackLayouts(1))
            .toHaveLength(2)
    })
})
