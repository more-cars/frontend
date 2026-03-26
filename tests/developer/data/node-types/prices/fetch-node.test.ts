import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getPriceById} from "../../../../../src/data/node-types/prices/getPriceById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiPriceNode} from "../../../../../src/data/node-types/prices/types/ApiPriceNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {PriceNode} from "../../../../../src/data/node-types/prices/types/PriceNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching PRICE node from data source', () => {
    test('when there is no PRICE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getPriceById(12345678))
            .toEqual(null)
    })

    test('when there is a PRICE', async () => {
        const apiResponse = {
            type: ApiNodeType.PRICE,
            id: 12345678,
            attributes: {
                price: 59990,
            },
        } as ApiPriceNode

        const expectedDataNode = {
            type: DataNodeType.PRICE,
            data: {
                id: 12345678,
                price: 59990,
            },
        } as PriceNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getPriceById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
