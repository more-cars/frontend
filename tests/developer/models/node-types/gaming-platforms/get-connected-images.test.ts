import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/gaming-platforms/findConnectedImages"
import {GamingPlatformHasImageRelationship} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformHasImageRelationship"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"

describe('Collect connected IMAGES for the GAMING PLATFORM detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeImage.data} as unknown as GamingPlatformHasImageRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeImage.data} as unknown as GamingPlatformHasImageRelationship,
        ])

        expect(await findConnectedImages(12345678))
            .toHaveLength(2)
    })
})
