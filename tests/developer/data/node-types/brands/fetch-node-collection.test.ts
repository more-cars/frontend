import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching BRAND collection from data source', () => {
    test('when there are no BRANDS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllBrands} = await import("../../../../../src/data/node-types/brands/getAllBrands")
        expect(await getAllBrands())
            .toHaveLength(0)
    })

    test('when there are multiple BRANDS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllBrands} = await import("../../../../../src/data/node-types/brands/getAllBrands")
        expect(await getAllBrands())
            .toHaveLength(3)
    })
})
