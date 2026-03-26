import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/prices/findNodeById"
import type {PriceNode} from "../../../../../src/data/node-types/prices/types/PriceNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node for the PRICE detail page', () => {
    test('when the PRICE does not exist', async () => {
        vi.spyOn(PriceDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(12345678))
            .toEqual(null)
    })

    test('when the PRICE exists', async () => {
        const node = {type: DataNodeType.PRICE, data: {id: 11111118, price: 59990}} as PriceNode
        vi.spyOn(PriceDataFacade, 'getNodeById').mockResolvedValue(node)

        const price = await findNodeById(11111118)

        expect(price?.fields.id).toEqual(node.data.id)
        expect(price?.fields.price).toEqual(node.data.price)
    })
})
