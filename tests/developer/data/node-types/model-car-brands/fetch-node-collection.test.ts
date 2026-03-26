import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllModelCarBrands} from "../../../../../src/data/node-types/model-car-brands/getAllModelCarBrands"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiModelCarBrandNode} from "../../../../../src/data/node-types/model-car-brands/types/ApiModelCarBrandNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MODEL CAR BRAND collection from data source', () => {
    test('when there are no MODEL CAR BRANDS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllModelCarBrands())
            .toHaveLength(0)
    })

    test('when there are multiple MODEL CAR BRANDS', async () => {
        const node = {type: ApiNodeType.MODEL_CAR_BRAND} as ApiModelCarBrandNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllModelCarBrands())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllModelCarBrands())
            .toHaveLength(0)
    })
})
