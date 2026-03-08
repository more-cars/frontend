import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching GAMING PLATFORM node from data source', () => {
    test('when there is no GAMING PLATFORM', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getGamingPlatformById} = await import("../../../../../src/data/node-types/gaming-platforms/getGamingPlatformById")
        expect(await getGamingPlatformById(1))
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
