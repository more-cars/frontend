import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../src/data/BrandDataFacade"
import {findAllNodes} from "../../../../src/models/brands/findAllNodes"

describe('Collect node collection for the BRAND overview page', () => {
    test('when there exist no BRANDS', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple BRANDS', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"},
            {id: 2, name: "dummy 2"},
            {id: 3, name: "dummy 3"},
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })
})
