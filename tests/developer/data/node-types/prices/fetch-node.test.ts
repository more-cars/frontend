import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching PRICE node from data source', () => {
    test('when there is no PRICE', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getPriceById} = await import("../../../../../src/data/node-types/prices/getPriceById")
        expect(await getPriceById(1))
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
