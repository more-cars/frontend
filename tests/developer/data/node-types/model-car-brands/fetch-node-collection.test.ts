import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MODEL CAR BRAND collection from data source', () => {
    test('when there are no MODEL CAR BRANDS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllModelCarBrands} = await import("../../../../../src/data/node-types/model-car-brands/getAllModelCarBrands")
        expect(await getAllModelCarBrands())
            .toHaveLength(0)
    })

    test('when there are multiple MODEL CAR BRANDS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllModelCarBrands} = await import("../../../../../src/data/node-types/model-car-brands/getAllModelCarBrands")
        expect(await getAllModelCarBrands())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllModelCarBrands} = await import("../../../../../src/data/node-types/model-car-brands/getAllModelCarBrands")
        expect(await getAllModelCarBrands())
            .toHaveLength(0)
    })
})
