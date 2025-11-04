import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findNodeById} from "../../../../src/models/brands/findNodeById"
import type {BrandNode} from "../../../../src/data/brands/types/BrandNode"

describe('Collect node for the BRAND detail page', () => {
    test('when the BRAND does not exist', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the BRAND exists', async () => {
        const node = {id: 1, name: "dummy 1"} as BrandNode
        vi.spyOn(BrandDataFacade, 'getNodeById').mockResolvedValue(node)

        expect(await findNodeById(1))
            .toEqual(node)
    })
})
