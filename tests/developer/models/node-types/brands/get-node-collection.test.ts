import {describe, expect, test, vi} from "vitest"
import {BrandDataFacade} from "../../../../../src/data/BrandDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/brands/findAllNodes"
import type {BrandNode} from "../../../../../src/data/node-types/brands/types/BrandNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the BRAND overview page', () => {
    test('when there exist no BRANDS', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple BRANDS', async () => {
        vi.spyOn(BrandDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.BRAND, data: {id: 11111118, name: "dummy 1"}} as BrandNode,
            {type: DataNodeType.BRAND, data: {id: 12222228, name: "dummy 2"}} as BrandNode,
            {type: DataNodeType.BRAND, data: {id: 13333338, name: "dummy 3"}} as BrandNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 BRANDS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.BRAND, data: {id: i, name: "dummy " + i}} as BrandNode)
        }

        vi.spyOn(BrandDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
