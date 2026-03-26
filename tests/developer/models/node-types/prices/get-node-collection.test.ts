import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/prices/findAllNodes"
import type {PriceNode} from "../../../../../src/data/node-types/prices/types/PriceNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the PRICE overview page', () => {
    test('when there exist no PRICES', async () => {
        vi.spyOn(PriceDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple PRICES', async () => {
        vi.spyOn(PriceDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.PRICE, data: {id: 11111118, price: 59990}} as PriceNode,
            {type: DataNodeType.PRICE, data: {id: 12222228, price: 58990}} as PriceNode,
            {type: DataNodeType.PRICE, data: {id: 13333338, price: 57990}} as PriceNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 PRICES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.PRICE, data: {id: i, price: 59990 + i}} as PriceNode)
        }

        vi.spyOn(PriceDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
