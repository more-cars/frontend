import {describe, expect, test, vi} from "vitest"
import {RaceTrackDataFacade} from "../../../../../src/data/RaceTrackDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/race-tracks/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {RaceTrackHasVideoRelationship} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackHasVideoRelationship"

describe('Collect connected VIDEOS for the RACE TRACK detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(RaceTrackDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as RaceTrackHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as RaceTrackHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
