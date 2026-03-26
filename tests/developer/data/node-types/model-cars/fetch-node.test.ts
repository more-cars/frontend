import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getModelCarById} from "../../../../../src/data/node-types/model-cars/getModelCarById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MODEL CAR node from data source', () => {
    test('when there is no MODEL CAR', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getModelCarById(12345678))
            .toEqual(null)
    })

    test('when there is a MODEL CAR', async () => {
        const responseData = {
            type: "model-cars",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getModelCarById} = await import("../../../../../src/data/node-types/model-cars/getModelCarById")
        expect(await getModelCarById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
