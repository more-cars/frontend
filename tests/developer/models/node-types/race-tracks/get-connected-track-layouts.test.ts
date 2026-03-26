import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedTrackLayouts} from "../../../../../src/models/node-types/race-tracks/findConnectedTrackLayouts"
import {RaceTrackHasLayoutRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHasLayoutRelationship"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"

describe('Collect connected TRACK LAYOUTS for the RACE TRACK detail page', () => {
    test('when no TRACK LAYOUTS are connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([])

        expect(await findConnectedTrackLayouts(12345678))
            .toHaveLength(0)
    })

    test('when there are TRACK LAYOUTS connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeTrackLayout.data} as unknown as RaceTrackHasLayoutRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeTrackLayout.data} as unknown as RaceTrackHasLayoutRelationship,
        ])

        expect(await findConnectedTrackLayouts(12345678))
            .toHaveLength(2)
    })
})
