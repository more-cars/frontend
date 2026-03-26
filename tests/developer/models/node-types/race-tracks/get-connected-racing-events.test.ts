import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/race-tracks/findConnectedRacingEvents"
import {RaceTrackHostedRacingEventRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHostedRacingEventRelationship"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"

describe('Collect connected RACING EVENTS for the RACE TRACK detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingEvent.data} as unknown as RaceTrackHostedRacingEventRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingEvent.data} as unknown as RaceTrackHostedRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(2)
    })
})
