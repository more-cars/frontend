import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected LAP TIMES from data source', () => {
    test('when there are no LAP TIMES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedLapTimes} = await import("../../../../../src/data/node-types/session-results/getConnectedLapTimes")
        expect(await getConnectedLapTimes(1))
            .toHaveLength(0)
    })

    test('when there are multiple LAP TIMES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedLapTimes} = await import("../../../../../src/data/node-types/session-results/getConnectedLapTimes")
        expect(await getConnectedLapTimes(1))
            .toHaveLength(3)
    })

    test('when the SESSION RESULT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/session-results/getSessionResultById", () => ({
            getSessionResultById: vi.fn(() => null)
        }))

        const {getConnectedLapTimes} = await import("../../../../../src/data/node-types/session-results/getConnectedLapTimes")
        expect(await getConnectedLapTimes(1))
            .toHaveLength(0)
    })
})
