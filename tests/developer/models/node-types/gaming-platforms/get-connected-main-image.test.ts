import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/gaming-platforms/findConnectedMainImage"
import {GamingPlatformHasMainImageRelationship} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformHasMainImageRelationship"

describe('Collect connected main IMAGE for the GAMING PLATFORM detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as GamingPlatformHasMainImageRelationship
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
