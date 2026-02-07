import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACE TRACK collection from data source', () => {
    test('when there are no RACE TRACKS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllRaceTracks} = await import("../../../../../src/data/node-types/race-tracks/getAllRaceTracks")
        expect(await getAllRaceTracks())
            .toHaveLength(0)
    })

    test('when there are multiple RACE TRACKS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllRaceTracks} = await import("../../../../../src/data/node-types/race-tracks/getAllRaceTracks")
        expect(await getAllRaceTracks())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllRaceTracks} = await import("../../../../../src/data/node-types/race-tracks/getAllRaceTracks")
        expect(await getAllRaceTracks())
            .toHaveLength(0)
    })
})
