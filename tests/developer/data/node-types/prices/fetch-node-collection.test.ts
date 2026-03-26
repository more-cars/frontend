import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllPrices} from "../../../../../src/data/node-types/prices/getAllPrices"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiPriceNode} from "../../../../../src/data/node-types/prices/types/ApiPriceNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching PRICE collection from data source', () => {
    test('when there are no PRICES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllPrices())
            .toHaveLength(0)
    })

    test('when there are multiple PRICES', async () => {
        const node = {type: ApiNodeType.PRICE} as ApiPriceNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllPrices())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllPrices())
            .toHaveLength(0)
    })
})
