import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/track-layouts/findConnectedRacingEvents"
import {TrackLayoutWasUsedByRacingEventRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutWasUsedByRacingEventRelationship"

describe('Collect connected RACING EVENTS for the TRACK LAYOUT detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as TrackLayoutWasUsedByRacingEventRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as TrackLayoutWasUsedByRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(2)
    })
})
