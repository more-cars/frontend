import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING EVENT collection from data source', () => {
    test('when there are no RACING EVENTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllRacingEvents} = await import("../../../../../src/data/node-types/racing-events/getAllRacingEvents")
        expect(await getAllRacingEvents())
            .toHaveLength(0)
    })

    test('when there are multiple RACING EVENTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllRacingEvents} = await import("../../../../../src/data/node-types/racing-events/getAllRacingEvents")
        expect(await getAllRacingEvents())
            .toHaveLength(3)
    })
})
