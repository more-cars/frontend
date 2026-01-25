import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected CAR MODELS from data source', () => {
    test('when there are no CAR MODELS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedCarModels} = await import("../../../../../src/data/node-types/brands/getConnectedCarModels")
        expect(await getConnectedCarModels(1))
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODELS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedCarModels} = await import("../../../../../src/data/node-types/brands/getConnectedCarModels")
        expect(await getConnectedCarModels(1))
            .toHaveLength(3)
    })

    test('when the BRAND does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/brands/getBrandById", () => ({
            getBrandById: vi.fn(() => null)
        }))

        const {getConnectedCarModels} = await import("../../../../../src/data/node-types/brands/getConnectedCarModels")
        expect(await getConnectedCarModels(1))
            .toHaveLength(0)
    })
})
