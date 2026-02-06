import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching CAR MODEL VARIANT node from data source', () => {
    test('when there is no CAR MODEL VARIANT', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getCarModelVariantById} = await import("../../../../../src/data/node-types/car-model-variants/getCarModelVariantById")
        expect(await getCarModelVariantById(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getCarModelVariantById} = await import("../../../../../src/data/node-types/car-model-variants/getCarModelVariantById")
        expect(await getCarModelVariantById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
