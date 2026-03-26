import {describe, expect, test, vi} from "vitest"
import {RacingGameDataFacade} from "../../../../../src/data/RacingGameDataFacade"
import {findConnectedTrackLayouts} from "../../../../../src/models/node-types/racing-games/findConnectedTrackLayouts"
import {RacingGameFeaturesTrackLayoutRelationship} from "../../../../../src/data/node-types/racing-games/types/RacingGameFeaturesTrackLayoutRelationship"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"

describe('Collect connected TRACK LAYOUTS for the RACING GAME detail page', () => {
    test('when no TRACK LAYOUTS are connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([])

        expect(await findConnectedTrackLayouts(12345678))
            .toHaveLength(0)
    })

    test('when there are TRACK LAYOUTS connected', async () => {
        vi.spyOn(RacingGameDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeTrackLayout.data} as unknown as RacingGameFeaturesTrackLayoutRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeTrackLayout.data} as unknown as RacingGameFeaturesTrackLayoutRelationship,
        ])

        expect(await findConnectedTrackLayouts(12345678))
            .toHaveLength(2)
    })
})
