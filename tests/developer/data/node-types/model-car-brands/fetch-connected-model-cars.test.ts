import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected MODEL CARS from data source', () => {
    test('when there are no MODEL CARS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedModelCars} = await import("../../../../../src/data/node-types/model-car-brands/getConnectedModelCars")
        expect(await getConnectedModelCars(1))
            .toHaveLength(0)
    })

    test('when there are multiple MODEL CARS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {partner_node: {data: {id: 1}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 3}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedModelCars} = await import("../../../../../src/data/node-types/model-car-brands/getConnectedModelCars")
        expect(await getConnectedModelCars(1))
            .toHaveLength(3)
    })

    test('when the MODEL CAR BRAND does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/model-car-brands/getModelCarBrandById", () => ({
            getModelCarBrandById: vi.fn(() => null)
        }))

        const {getConnectedModelCars} = await import("../../../../../src/data/node-types/model-car-brands/getConnectedModelCars")
        expect(await getConnectedModelCars(1))
            .toHaveLength(0)
    })
})
