import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected predecessor from data source', () => {
    test('when there is no predecessor connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/racing-events/getRacingEventById", () => ({
            getRacingEventById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/racing-events/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a predecessor connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/racing-events/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the predecessor does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/racing-events/getRacingEventById", () => ({
            getRacingEventById: vi.fn(() => null)
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/racing-events/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toEqual(null)
    })
})
