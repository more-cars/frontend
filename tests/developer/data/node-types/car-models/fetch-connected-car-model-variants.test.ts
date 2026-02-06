import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected CAR MODEL VARIANTS from data source', () => {
    test('when there are no CAR MODEL VARIANTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedCarModelVariants} = await import("../../../../../src/data/node-types/car-models/getConnectedCarModelVariants")
        expect(await getConnectedCarModelVariants(1))
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODEL VARIANTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedCarModelVariants} = await import("../../../../../src/data/node-types/car-models/getConnectedCarModelVariants")
        expect(await getConnectedCarModelVariants(1))
            .toHaveLength(3)
    })

    test('when the CAR MODEL does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/car-models/getCarModelById", () => ({
            getCarModelById: vi.fn(() => null)
        }))

        const {getConnectedCarModelVariants} = await import("../../../../../src/data/node-types/car-models/getConnectedCarModelVariants")
        expect(await getConnectedCarModelVariants(1))
            .toHaveLength(0)
    })
})
