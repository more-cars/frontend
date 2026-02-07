import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING SESSION collection from data source', () => {
    test('when there are no RACING SESSIONS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllRacingSessions} = await import("../../../../../src/data/node-types/racing-sessions/getAllRacingSessions")
        expect(await getAllRacingSessions())
            .toHaveLength(0)
    })

    test('when there are multiple RACING SESSIONS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllRacingSessions} = await import("../../../../../src/data/node-types/racing-sessions/getAllRacingSessions")
        expect(await getAllRacingSessions())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllRacingSessions} = await import("../../../../../src/data/node-types/racing-sessions/getAllRacingSessions")
        expect(await getAllRacingSessions())
            .toHaveLength(0)
    })
})
