import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected successor CAR MODEL from data source', () => {
    test('when there in no successor CAR MODEL connected', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedSuccessorCarModel} = await import("../../../../src/data/node-types/car-models/getConnectedSuccessorCarModel")
        expect(await getConnectedSuccessorCarModel(1))
            .toEqual(null)
    })

    test('when there is a successor CAR MODEL connected', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedSuccessorCarModel} = await import("../../../../src/data/node-types/car-models/getConnectedSuccessorCarModel")
        expect(await getConnectedSuccessorCarModel(1))
            .toHaveProperty('partner_node.id', 2)
    })
})
