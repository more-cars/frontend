import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching CAR MODEL collection from data source', () => {
    test('when there are no CAR MODELS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllCarModels} = await import("../../../../../src/data/node-types/car-models/getAllCarModels")
        expect(await getAllCarModels())
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODELS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllCarModels} = await import("../../../../../src/data/node-types/car-models/getAllCarModels")
        expect(await getAllCarModels())
            .toHaveLength(3)
    })
})
