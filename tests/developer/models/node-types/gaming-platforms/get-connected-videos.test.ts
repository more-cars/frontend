import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findConnectedVideos} from "../../../../../src/models/node-types/gaming-platforms/findConnectedVideos"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {GamingPlatformHasVideoRelationship} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformHasVideoRelationship"

describe('Collect connected VIDEOS for the GAMING PLATFORM detail page', () => {
    test('when no VIDEOS are connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedVideoNodes').mockResolvedValue([])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are VIDEOS connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedVideoNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeVideo.data} as unknown as GamingPlatformHasVideoRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeVideo.data} as unknown as GamingPlatformHasVideoRelationship,
        ])

        expect(await findConnectedVideos(12345678))
            .toHaveLength(2)
    })
})
