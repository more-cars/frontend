import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected SESSION RESULTS from data source', () => {
    test('when there are no SESSION RESULTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedSessionResults} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedSessionResults")
        expect(await getConnectedSessionResults(1))
            .toHaveLength(0)
    })

    test('when there are multiple SESSION RESULTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedSessionResults} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedSessionResults")
        expect(await getConnectedSessionResults(1))
            .toHaveLength(3)
    })

    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/car-model-variants/getCarModelVariantById", () => ({
            getCarModelVariantById: vi.fn(() => null)
        }))

        const {getConnectedSessionResults} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedSessionResults")
        expect(await getConnectedSessionResults(1))
            .toHaveLength(0)
    })
})
