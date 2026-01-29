import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedTrackLayouts} from "../../../../../src/models/node-types/race-tracks/findConnectedTrackLayouts"
import {RaceTrackHasLayoutRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHasLayoutRelationship"

describe('Collect connected TRACK LAYOUTS for the RACE TRACK detail page', () => {
    test('when no TRACK LAYOUTS are connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([])

        expect(await findConnectedTrackLayouts(1))
            .toHaveLength(0)
    })

    test('when there are TRACK LAYOUTS connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedTrackLayoutNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RaceTrackHasLayoutRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RaceTrackHasLayoutRelationship,
        ])

        expect(await findConnectedTrackLayouts(1))
            .toHaveLength(2)
    })
})
