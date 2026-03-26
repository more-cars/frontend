import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getCarModelById} from "../../../../../src/data/node-types/car-models/getCarModelById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching CAR MODEL node from data source', () => {
    test('when there is no CAR MODEL', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCarModelById(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL', async () => {
        const responseData = {
            type: "car-models",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getCarModelById} = await import("../../../../../src/data/node-types/car-models/getCarModelById")
        expect(await getCarModelById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
