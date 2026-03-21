import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MODEL CAR BRAND node from data source', () => {
    test('when there is no MODEL CAR BRAND', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getModelCarBrandById} = await import("../../../../../src/data/node-types/model-car-brands/getModelCarBrandById")
        expect(await getModelCarBrandById(1))
            .toEqual(null)
    })

    test('when there is a MODEL CAR BRAND', async () => {
        const responseData = {
            type: "model-car-brands",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getModelCarBrandById} = await import("../../../../../src/data/node-types/model-car-brands/getModelCarBrandById")
        expect(await getModelCarBrandById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
