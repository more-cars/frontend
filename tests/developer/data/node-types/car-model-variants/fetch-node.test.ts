import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getCarModelVariantById} from "../../../../../src/data/node-types/car-model-variants/getCarModelVariantById"

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
        const responseData = {
            type: "car-model-variants",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getCarModelVariantById} = await import("../../../../../src/data/node-types/car-model-variants/getCarModelVariantById")
        expect(await getCarModelVariantById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
