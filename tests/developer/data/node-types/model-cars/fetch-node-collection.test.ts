import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MODEL CAR collection from data source', () => {
    test('when there are no MODEL CARS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllModelCars} = await import("../../../../../src/data/node-types/model-cars/getAllModelCars")
        expect(await getAllModelCars())
            .toHaveLength(0)
    })

    test('when there are multiple MODEL CARS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllModelCars} = await import("../../../../../src/data/node-types/model-cars/getAllModelCars")
        expect(await getAllModelCars())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllModelCars} = await import("../../../../../src/data/node-types/model-cars/getAllModelCars")
        expect(await getAllModelCars())
            .toHaveLength(0)
    })
})
