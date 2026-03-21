import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected MODEL CAR BRAND from data source', () => {
    test('when there is no MODEL CAR BRAND connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/model-cars/getModelCarById", () => ({
            getModelCarById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedModelCarBrand} = await import("../../../../../src/data/node-types/model-cars/getConnectedModelCarBrand")
        expect(await getConnectedModelCarBrand(1))
            .toEqual(null)
    })

    test('when there is a MODEL CAR BRAND connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedModelCarBrand} = await import("../../../../../src/data/node-types/model-cars/getConnectedModelCarBrand")
        expect(await getConnectedModelCarBrand(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the MODEL CAR does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/model-cars/getModelCarById", () => ({
            getModelCarById: vi.fn(() => null)
        }))

        const {getConnectedModelCarBrand} = await import("../../../../../src/data/node-types/model-cars/getConnectedModelCarBrand")
        expect(await getConnectedModelCarBrand(1))
            .toEqual(null)
    })
})
