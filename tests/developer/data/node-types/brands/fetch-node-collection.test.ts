import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllBrands} from "../../../../../src/data/node-types/brands/getAllBrands"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiBrandNode} from "../../../../../src/data/node-types/brands/types/ApiBrandNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching BRAND collection from data source', () => {
    test('when there are no BRANDS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllBrands())
            .toHaveLength(0)
    })

    test('when there are multiple BRANDS', async () => {
        const node = {type: ApiNodeType.BRAND} as ApiBrandNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllBrands())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllBrands())
            .toHaveLength(0)
    })
})
