import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findConnectedImages} from "../../../../src/models/node-types/brands/findConnectedImages"
import type {BrandHasImageRelationship} from "../../../../src/data/node-types/brands/types/BrandHasImageRelationship"

describe('Collect connected IMAGES for the BRAND detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2"} as unknown as BrandHasImageRelationship,
            {id: 3, name: "dummy 3"} as unknown as BrandHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
