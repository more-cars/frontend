import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RATING node from data source', () => {
    test('when there is no RATING', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRatingById} = await import("../../../../../src/data/node-types/ratings/getRatingById")
        expect(await getRatingById(1))
            .toEqual(null)
    })

    test('when there is a RATING', async () => {
        const responseData = {
            type: "ratings",
            id: 1,
            attributes: {
                rating_value: 93
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRatingById} = await import("../../../../../src/data/node-types/ratings/getRatingById")
        expect(await getRatingById(1))
            .toEqual({id: 1, rating_value: 93})
    })
})
