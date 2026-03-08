import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching GAMING PLATFORM collection from data source', () => {
    test('when there are no GAMING PLATFORMS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllGamingPlatforms} = await import("../../../../../src/data/node-types/gaming-platforms/getAllGamingPlatforms")
        expect(await getAllGamingPlatforms())
            .toHaveLength(0)
    })

    test('when there are multiple GAMING PLATFORMS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllGamingPlatforms} = await import("../../../../../src/data/node-types/gaming-platforms/getAllGamingPlatforms")
        expect(await getAllGamingPlatforms())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllGamingPlatforms} = await import("../../../../../src/data/node-types/gaming-platforms/getAllGamingPlatforms")
        expect(await getAllGamingPlatforms())
            .toHaveLength(0)
    })
})
