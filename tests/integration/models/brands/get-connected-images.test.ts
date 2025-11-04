import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findConnectedImages} from "../../../../src/models/brands/findConnectedImages"

describe('Collect connected IMAGES for the BRAND detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedImageNodes').mockResolvedValue(false)

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {data: {relationship_id: 2, relationship_name: "dummy 1", relationship_partner: {}}},
            {data: {relationship_id: 3, relationship_name: "dummy 2", relationship_partner: {}}},
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
