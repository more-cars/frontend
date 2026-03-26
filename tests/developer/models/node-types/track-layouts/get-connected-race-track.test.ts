import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedRaceTrack} from "../../../../../src/models/node-types/track-layouts/findConnectedRaceTrack"
import {FakeRaceTrack} from "../../../../_toolbox/fixtures/node-types/FakeRaceTrack"
import {TrackLayoutBelongsToRaceTrackRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutBelongsToRaceTrackRelationship"

describe('Collect connected RACE TRACK for the TRACK LAYOUT detail page', () => {
    test('when no RACE TRACK is connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(null)

        expect(await findConnectedRaceTrack(12345678))
            .toEqual(null)
    })

    test('when there is a RACE TRACK connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeRaceTrack.data} as unknown as TrackLayoutBelongsToRaceTrackRelationship

        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(data)

        expect(await findConnectedRaceTrack(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
