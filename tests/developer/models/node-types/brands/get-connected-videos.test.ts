import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/brands/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {BrandHasVideoRelationship} from "../../../../../src/data/node-types/brands/types/BrandHasVideoRelationship"

describe('Collect connected VIDEOS for the BRAND detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as BrandHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as BrandHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
