import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/racing-series/findConnectedRacingEvents"
import {
    RacingSeriesHasRacingEventRelationship
} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesHasRacingEventRelationship"

describe('Collect connected RACING EVENTS for the RACING SERIES detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RacingSeriesHasRacingEventRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RacingSeriesHasRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(2)
    })
})
