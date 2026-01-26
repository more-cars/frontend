import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected BRAND from data source', () => {
    test('when there is no BRAND connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/car-models/getCarModelById", () => ({
            getCarModelById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedBrand} = await import("../../../../../src/data/node-types/car-models/getConnectedBrand")
        expect(await getConnectedBrand(1))
            .toEqual(null)
    })

    test('when there is a BRAND connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedBrand} = await import("../../../../../src/data/node-types/car-models/getConnectedBrand")
        expect(await getConnectedBrand(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the CAR MODEL does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/car-models/getCarModelById", () => ({
            getCarModelById: vi.fn(() => null)
        }))

        const {getConnectedBrand} = await import("../../../../../src/data/node-types/car-models/getConnectedBrand")
        expect(await getConnectedBrand(1))
            .toEqual(null)
    })
})
