import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING SERIES collection from data source', () => {
    test('when there are no RACING SERIES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllRacingSeries} = await import("../../../../../src/data/node-types/racing-series/getAllRacingSeries")
        expect(await getAllRacingSeries())
            .toHaveLength(0)
    })

    test('when there are multiple RACING SERIES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllRacingSeries} = await import("../../../../../src/data/node-types/racing-series/getAllRacingSeries")
        expect(await getAllRacingSeries())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllRacingSeries} = await import("../../../../../src/data/node-types/racing-series/getAllRacingSeries")
        expect(await getAllRacingSeries())
            .toHaveLength(0)
    })
})
