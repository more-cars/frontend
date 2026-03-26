import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedRaceTrack} from "../../../../../src/models/node-types/racing-events/findConnectedRaceTrack"
import {FakeRaceTrack} from "../../../../_toolbox/fixtures/node-types/FakeRaceTrack"
import {RacingEventTookPlaceAtRaceTrackRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventTookPlaceAtRaceTrackRelationship"

describe('Collect connected RACE TRACK for the RACING EVENT detail page', () => {
    test('when no RACE TRACK is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(null)

        expect(await findConnectedRaceTrack(12345678))
            .toEqual(null)
    })

    test('when there is a RACE TRACK connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeRaceTrack.data} as unknown as RacingEventTookPlaceAtRaceTrackRelationship

        vi.spyOn(RacingEventDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(data)

        expect(await findConnectedRaceTrack(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
