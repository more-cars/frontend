import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching CAR MODEL VARIANT collection from data source', () => {
    test('when there are no CAR MODEL VARIANTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllCarModelVariants} = await import("../../../../../src/data/node-types/car-model-variants/getAllCarModelVariants")
        expect(await getAllCarModelVariants())
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODEL VARIANTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllCarModelVariants} = await import("../../../../../src/data/node-types/car-model-variants/getAllCarModelVariants")
        expect(await getAllCarModelVariants())
            .toHaveLength(3)
    })
})
