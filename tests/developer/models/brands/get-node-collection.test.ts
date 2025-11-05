import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findAllNodes} from "../../../../src/models/node-types/brands/findAllNodes"
import type {BrandNode} from "../../../../src/data/node-types/brands/types/BrandNode"

describe('Collect node collection for the BRAND overview page', () => {
    test('when there exist no BRANDS', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple BRANDS', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as BrandNode,
            {id: 2, name: "dummy 2"} as BrandNode,
            {id: 3, name: "dummy 3"} as BrandNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })
})
