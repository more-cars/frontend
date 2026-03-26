import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllCarModels} from "../../../../../src/data/node-types/car-models/getAllCarModels"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiCarModelNode} from "../../../../../src/data/node-types/car-models/types/ApiCarModelNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching CAR MODEL collection from data source', () => {
    test('when there are no CAR MODELS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCarModels())
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODELS', async () => {
        const node = {type: ApiNodeType.CAR_MODEL} as ApiCarModelNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCarModels())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCarModels())
            .toHaveLength(0)
    })
})
