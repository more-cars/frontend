import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/track-layouts/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {TrackLayoutHasVideoRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutHasVideoRelationship"

describe('Collect connected VIDEOS for the TRACK LAYOUT detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as TrackLayoutHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as TrackLayoutHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
