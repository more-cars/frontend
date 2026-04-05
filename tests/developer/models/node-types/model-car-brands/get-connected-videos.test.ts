import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/model-car-brands/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {ModelCarBrandHasVideoRelationship} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandHasVideoRelationship"

describe('Collect connected VIDEOS for the MODEL CAR BRAND detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as ModelCarBrandHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as ModelCarBrandHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
