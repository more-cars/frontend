import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getGamingPlatformById} from "../../../../../src/data/node-types/gaming-platforms/getGamingPlatformById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching GAMING PLATFORM node from data source', () => {
    test('when there is no GAMING PLATFORM', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getGamingPlatformById(12345678))
            .toEqual(null)
    })

    test('when there is a GAMING PLATFORM', async () => {
        const responseData = {
            type: "gaming-platforms",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getGamingPlatformById} = await import("../../../../../src/data/node-types/gaming-platforms/getGamingPlatformById")
        expect(await getGamingPlatformById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
