import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RATING collection from data source', () => {
    test('when there are no RATINGS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllRatings} = await import("../../../../../src/data/node-types/ratings/getAllRatings")
        expect(await getAllRatings())
            .toHaveLength(0)
    })

    test('when there are multiple RATINGS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllRatings} = await import("../../../../../src/data/node-types/ratings/getAllRatings")
        expect(await getAllRatings())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllRatings} = await import("../../../../../src/data/node-types/ratings/getAllRatings")
        expect(await getAllRatings())
            .toHaveLength(0)
    })
})
