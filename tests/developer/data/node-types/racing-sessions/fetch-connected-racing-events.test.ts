import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING EVENT from data source', () => {
    test('when there is no RACING EVENT connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/racing-sessions/getRacingSessionById", () => ({
            getRacingSessionById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedRacingEvent} = await import("../../../../../src/data/node-types/racing-sessions/getConnectedRacingEvent")
        expect(await getConnectedRacingEvent(1))
            .toEqual(null)
    })

    test('when there is a RACING EVENT connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedRacingEvent} = await import("../../../../../src/data/node-types/racing-sessions/getConnectedRacingEvent")
        expect(await getConnectedRacingEvent(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the RACING SESSION does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/racing-sessions/getRacingSessionById", () => ({
            getRacingSessionById: vi.fn(() => null)
        }))

        const {getConnectedRacingEvent} = await import("../../../../../src/data/node-types/racing-sessions/getConnectedRacingEvent")
        expect(await getConnectedRacingEvent(1))
            .toEqual(null)
    })
})
