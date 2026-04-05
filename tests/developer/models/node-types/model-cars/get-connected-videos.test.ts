import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/model-cars/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {ModelCarHasVideoRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarHasVideoRelationship"

describe('Collect connected VIDEOS for the MODEL CAR detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as ModelCarHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as ModelCarHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
