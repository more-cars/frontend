import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching BRAND node from data source', () => {
    test('when there is no BRAND', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getBrandById} = await import("../../../../../src/data/node-types/brands/getBrandById")
        expect(await getBrandById(1))
            .toEqual(null)
    })

    test('when there is a BRAND', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getBrandById} = await import("../../../../../src/data/node-types/brands/getBrandById")
        expect(await getBrandById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
