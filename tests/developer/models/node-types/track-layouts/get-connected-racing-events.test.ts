import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/track-layouts/findConnectedRacingEvents"
import {TrackLayoutWasUsedByRacingEventRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutWasUsedByRacingEventRelationship"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"

describe('Collect connected RACING EVENTS for the TRACK LAYOUT detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingEvent.data} as unknown as TrackLayoutWasUsedByRacingEventRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingEvent.data} as unknown as TrackLayoutWasUsedByRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(2)
    })
})
