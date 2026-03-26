import {describe, expect, test, vi} from "vitest"
import {RacingSeriesDataFacade} from "../../../../../src/data/RacingSeriesDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/racing-series/findConnectedRacingEvents"
import {RacingSeriesHasRacingEventRelationship} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesHasRacingEventRelationship"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"

describe('Collect connected RACING EVENTS for the RACING SERIES detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(RacingSeriesDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingEvent.data} as unknown as RacingSeriesHasRacingEventRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingEvent.data} as unknown as RacingSeriesHasRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(2)
    })
})
