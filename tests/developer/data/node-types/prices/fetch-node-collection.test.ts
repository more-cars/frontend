import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching PRICE collection from data source', () => {
    test('when there are no PRICES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllPrices} = await import("../../../../../src/data/node-types/prices/getAllPrices")
        expect(await getAllPrices())
            .toHaveLength(0)
    })

    test('when there are multiple PRICES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllPrices} = await import("../../../../../src/data/node-types/prices/getAllPrices")
        expect(await getAllPrices())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllPrices} = await import("../../../../../src/data/node-types/prices/getAllPrices")
        expect(await getAllPrices())
            .toHaveLength(0)
    })
})
