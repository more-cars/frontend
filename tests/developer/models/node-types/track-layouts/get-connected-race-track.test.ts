import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedRaceTrack} from "../../../../../src/models/node-types/track-layouts/findConnectedRaceTrack"
import {TrackLayoutBelongsToRaceTrackRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutBelongsToRaceTrackRelationship"

describe('Collect connected RACE TRACK for the TRACK LAYOUT detail page', () => {
    test('when no RACE TRACK is connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(null)

        expect(await findConnectedRaceTrack(1))
            .toEqual(null)
    })

    test('when there is a RACE TRACK connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as TrackLayoutBelongsToRaceTrackRelationship
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedRaceTrackNode').mockResolvedValue(data)

        expect(await findConnectedRaceTrack(1))
            .toHaveProperty('id', 1)
    })
})
