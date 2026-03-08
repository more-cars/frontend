import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/gaming-platforms/findConnectedImages"
import {GamingPlatformHasImageRelationship} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformHasImageRelationship"

describe('Collect connected IMAGES for the GAMING PLATFORM detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as GamingPlatformHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as GamingPlatformHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
