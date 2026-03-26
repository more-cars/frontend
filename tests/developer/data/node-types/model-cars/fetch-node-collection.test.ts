import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllModelCars} from "../../../../../src/data/node-types/model-cars/getAllModelCars"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiModelCarNode} from "../../../../../src/data/node-types/model-cars/types/ApiModelCarNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MODEL CAR collection from data source', () => {
    test('when there are no MODEL CARS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllModelCars())
            .toHaveLength(0)
    })

    test('when there are multiple MODEL CARS', async () => {
        const node = {type: ApiNodeType.MODEL_CAR} as ApiModelCarNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllModelCars())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllModelCars())
            .toHaveLength(0)
    })
})
