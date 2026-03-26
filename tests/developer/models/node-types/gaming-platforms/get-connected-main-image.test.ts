import {describe, expect, test, vi} from "vitest"
import {GamingPlatformDataFacade} from "../../../../../src/data/GamingPlatformDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/gaming-platforms/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {GamingPlatformHasMainImageRelationship} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformHasMainImageRelationship"

describe('Collect connected main IMAGE for the GAMING PLATFORM detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(GamingPlatformDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as GamingPlatformHasMainImageRelationship

        vi.spyOn(GamingPlatformDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
