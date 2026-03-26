import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/brands/findConnectedImages"
import type {BrandHasImageRelationship} from "../../../../../src/data/node-types/brands/types/BrandHasImageRelationship"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"

describe('Collect connected IMAGES for the BRAND detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(BrandDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeImage.data} as unknown as BrandHasImageRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeImage.data} as unknown as BrandHasImageRelationship,
        ])

        expect(await findConnectedImages(12345678))
            .toHaveLength(2)
    })
})
