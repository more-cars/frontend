import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected CAR MODEL from data source', () => {
    test('when there is no CAR MODEL connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/car-model-variants/getCarModelVariantById", () => ({
            getCarModelVariantById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedCarModel} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedCarModel")
        expect(await getConnectedCarModel(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedCarModel} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedCarModel")
        expect(await getConnectedCarModel(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/car-model-variants/getCarModelVariantById", () => ({
            getCarModelVariantById: vi.fn(() => null)
        }))

        const {getConnectedCarModel} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedCarModel")
        expect(await getConnectedCarModel(1))
            .toEqual(null)
    })
})
