import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getPriceById} from "../../../../../src/data/node-types/prices/getPriceById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching PRICE node from data source', () => {
    test('when there is no PRICE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getPriceById(12345678))
            .toEqual(null)
    })

    test('when there is a PRICE', async () => {
        const responseData = {
            type: "prices",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getPriceById} = await import("../../../../../src/data/node-types/prices/getPriceById")
        expect(await getPriceById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
