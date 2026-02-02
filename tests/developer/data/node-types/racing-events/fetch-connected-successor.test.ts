import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected successor from data source', () => {
    test('when there is no successor connected', async () => {
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

        const {getConnectedSuccessor} = await import("../../../../../src/data/node-types/racing-events/getConnectedSuccessor")
        expect(await getConnectedSuccessor(1))
            .toEqual(null)
    })

    test('when there is a successor connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedSuccessor} = await import("../../../../../src/data/node-types/racing-events/getConnectedSuccessor")
        expect(await getConnectedSuccessor(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the successor does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/racing-events/getRacingEventById", () => ({
            getRacingEventById: vi.fn(() => null)
        }))

        const {getConnectedSuccessor} = await import("../../../../../src/data/node-types/racing-events/getConnectedSuccessor")
        expect(await getConnectedSuccessor(1))
            .toEqual(null)
    })
})
