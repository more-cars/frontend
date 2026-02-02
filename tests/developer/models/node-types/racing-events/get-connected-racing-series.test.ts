import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedRacingSeries} from "../../../../../src/models/node-types/racing-events/findConnectedRacingSeries"
import {RacingEventBelongsToRacingSeriesRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventBelongsToRacingSeriesRelationship"

describe('Collect connected RACING SERIES for the RACING EVENT detail page', () => {
    test('when no RACING SERIES is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedRacingSeriesNode').mockResolvedValue(null)

        expect(await findConnectedRacingSeries(1))
            .toEqual(null)
    })

    test('when there is a RACING SERIES connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingEventBelongsToRacingSeriesRelationship
        vi.spyOn(RacingEventDataFacade, 'getConnectedRacingSeriesNode').mockResolvedValue(data)

        expect(await findConnectedRacingSeries(1))
            .toHaveProperty('id', 1)
    })
})
