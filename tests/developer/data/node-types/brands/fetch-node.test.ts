import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getBrandById} from "../../../../../src/data/node-types/brands/getBrandById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching BRAND node from data source', () => {
    test('when there is no BRAND', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getBrandById(12345678))
            .toEqual(null)
    })

    test('when there is a BRAND', async () => {
        const responseData = {
            type: "brands",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getBrandById} = await import("../../../../../src/data/node-types/brands/getBrandById")
        expect(await getBrandById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
