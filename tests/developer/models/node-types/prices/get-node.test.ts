import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/prices/findNodeById"
import type {PriceNode} from "../../../../../src/data/node-types/prices/types/PriceNode"

describe('Collect node for the PRICE detail page', () => {
    test('when the PRICE does not exist', async () => {
        vi.spyOn(PriceDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the PRICE exists', async () => {
        const node = {id: 1, price: 59990} as PriceNode
        vi.spyOn(PriceDataFacade, 'getNodeById').mockResolvedValue(node)

        const price = await findNodeById(1)

        expect(price?.id).toEqual(node.id)
        expect(price?.price).toEqual(node.price)
    })
})
