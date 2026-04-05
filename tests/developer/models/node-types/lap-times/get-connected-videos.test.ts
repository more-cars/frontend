import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/lap-times/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {LapTimeHasVideoRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeHasVideoRelationship"

describe('Collect connected VIDEOS for the LAP TIME detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as LapTimeHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as LapTimeHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
