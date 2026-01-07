import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findConnectedMainImage} from "../../../../src/models/node-types/brands/findConnectedMainImage"
import {BrandHasMainImageRelationship} from "../../../../src/data/node-types/brands/types/BrandHasMainImageRelationship"

describe('Collect connected main IMAGE for the BRAND detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as BrandHasMainImageRelationship
        vi.spyOn(BrandDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
