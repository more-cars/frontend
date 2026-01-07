import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected predecessor CAR MODEL from data source', () => {
    test('when there in no predecessor CAR MODEL connected', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedPredecessorCarModel} = await import("../../../../src/data/node-types/car-models/getConnectedPredecessorCarModel")
        expect(await getConnectedPredecessorCarModel(1))
            .toEqual(null)
    })

    test('when there is a predecessor CAR MODEL connected', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedPredecessorCarModel} = await import("../../../../src/data/node-types/car-models/getConnectedPredecessorCarModel")
        expect(await getConnectedPredecessorCarModel(1))
            .toHaveProperty('partner_node.id', 2)
    })
})
