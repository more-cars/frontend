import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MAGAZINE collection from data source', () => {
    test('when there are no MAGAZINES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllMagazines} = await import("../../../../../src/data/node-types/magazines/getAllMagazines")
        expect(await getAllMagazines())
            .toHaveLength(0)
    })

    test('when there are multiple MAGAZINES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllMagazines} = await import("../../../../../src/data/node-types/magazines/getAllMagazines")
        expect(await getAllMagazines())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllMagazines} = await import("../../../../../src/data/node-types/magazines/getAllMagazines")
        expect(await getAllMagazines())
            .toHaveLength(0)
    })
})
