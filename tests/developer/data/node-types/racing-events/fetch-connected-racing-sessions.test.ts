import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING SESSIONS from data source', () => {
    test('when there are no RACING SESSIONS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedRacingSessions} = await import("../../../../../src/data/node-types/racing-events/getConnectedRacingSessions")
        expect(await getConnectedRacingSessions(1))
            .toHaveLength(0)
    })

    test('when there are multiple RACING SESSIONS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedRacingSessions} = await import("../../../../../src/data/node-types/racing-events/getConnectedRacingSessions")
        expect(await getConnectedRacingSessions(1))
            .toHaveLength(3)
    })

    test('when the RACING EVENT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/racing-events/getRacingEventById", () => ({
            getRacingEventById: vi.fn(() => null)
        }))

        const {getConnectedRacingSessions} = await import("../../../../../src/data/node-types/racing-events/getConnectedRacingSessions")
        expect(await getConnectedRacingSessions(1))
            .toHaveLength(0)
    })
})
