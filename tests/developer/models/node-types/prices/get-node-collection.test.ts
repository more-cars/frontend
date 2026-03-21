import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/prices/findAllNodes"
import type {PriceNode} from "../../../../../src/data/node-types/prices/types/PriceNode"

describe('Collect node collection for the PRICE overview page', () => {
    test('when there exist no PRICES', async () => {
        vi.spyOn(PriceDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple PRICES', async () => {
        vi.spyOn(PriceDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, name: "dummy 1"} as PriceNode,
            {id: 2, name: "dummy 2"} as PriceNode,
            {id: 3, name: "dummy 3"} as PriceNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 PRICES', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, name: "dummy " + i} as PriceNode)
        }

        vi.spyOn(PriceDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
