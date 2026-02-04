import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING SESSION from data source', () => {
    test('when there is no RACING SESSION connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/session-results/getSessionResultById", () => ({
            getSessionResultById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedRacingSession} = await import("../../../../../src/data/node-types/session-results/getConnectedRacingSession")
        expect(await getConnectedRacingSession(1))
            .toEqual(null)
    })

    test('when there is a RACING SESSION connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedRacingSession} = await import("../../../../../src/data/node-types/session-results/getConnectedRacingSession")
        expect(await getConnectedRacingSession(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the SESSION RESULT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/session-results/getSessionResultById", () => ({
            getSessionResultById: vi.fn(() => null)
        }))

        const {getConnectedRacingSession} = await import("../../../../../src/data/node-types/session-results/getConnectedRacingSession")
        expect(await getConnectedRacingSession(1))
            .toEqual(null)
    })
})
