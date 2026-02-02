import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/race-tracks/findConnectedRacingEvents"
import {RaceTrackHostedRacingEventRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHostedRacingEventRelationship"

describe('Collect connected RACING EVENTS for the RACE TRACK detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RaceTrackHostedRacingEventRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RaceTrackHostedRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(2)
    })
})
