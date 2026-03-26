import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getModelCarBrandById} from "../../../../../src/data/node-types/model-car-brands/getModelCarBrandById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MODEL CAR BRAND node from data source', () => {
    test('when there is no MODEL CAR BRAND', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getModelCarBrandById(12345678))
            .toEqual(null)
    })

    test('when there is a MODEL CAR BRAND', async () => {
        const responseData = {
            type: "model-car-brands",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getModelCarBrandById} = await import("../../../../../src/data/node-types/model-car-brands/getModelCarBrandById")
        expect(await getModelCarBrandById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
