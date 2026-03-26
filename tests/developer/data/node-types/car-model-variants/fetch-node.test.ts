import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getCarModelVariantById} from "../../../../../src/data/node-types/car-model-variants/getCarModelVariantById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiCarModelVariantNode} from "../../../../../src/data/node-types/car-model-variants/types/ApiCarModelVariantNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {CarModelVariantNode} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching CAR MODEL VARIANT node from data source', () => {
    test('when there is no CAR MODEL VARIANT', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCarModelVariantById(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT', async () => {
        const apiResponse = {
            type: ApiNodeType.CAR_MODEL_VARIANT,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiCarModelVariantNode

        const expectedDataNode = {
            type: DataNodeType.CAR_MODEL_VARIANT,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as CarModelVariantNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCarModelVariantById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
