import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllCarModelVariants} from "../../../../../src/data/node-types/car-model-variants/getAllCarModelVariants"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiCarModelVariantNode} from "../../../../../src/data/node-types/car-model-variants/types/ApiCarModelVariantNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching CAR MODEL VARIANT collection from data source', () => {
    test('when there are no CAR MODEL VARIANTS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCarModelVariants())
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODEL VARIANTS', async () => {
        const node = {type: ApiNodeType.CAR_MODEL_VARIANT} as ApiCarModelVariantNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCarModelVariants())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllCarModelVariants())
            .toHaveLength(0)
    })
})
