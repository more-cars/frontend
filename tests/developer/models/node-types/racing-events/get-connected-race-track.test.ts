import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedRaceTrack} from "../../../../../src/models/node-types/racing-events/findConnectedRaceTrack"
import {RacingEventTookPlaceAtRaceTrackRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventTookPlaceAtRaceTrackRelationship"

describe('Collect connected RACE TRACK for the RACING EVENT detail page', () => {
    test('when no RACE TRACK is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(null)

        expect(await findConnectedRaceTrack(1))
            .toEqual(null)
    })

    test('when there is a RACE TRACK connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingEventTookPlaceAtRaceTrackRelationship
        vi.spyOn(RacingEventDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(data)

        expect(await findConnectedRaceTrack(1))
            .toHaveProperty('id', 1)
    })
})
