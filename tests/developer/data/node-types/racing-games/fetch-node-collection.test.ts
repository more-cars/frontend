import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING GAME collection from data source', () => {
    test('when there are no RACING GAMES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllRacingGames} = await import("../../../../../src/data/node-types/racing-games/getAllRacingGames")
        expect(await getAllRacingGames())
            .toHaveLength(0)
    })

    test('when there are multiple RACING GAMES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllRacingGames} = await import("../../../../../src/data/node-types/racing-games/getAllRacingGames")
        expect(await getAllRacingGames())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllRacingGames} = await import("../../../../../src/data/node-types/racing-games/getAllRacingGames")
        expect(await getAllRacingGames())
            .toHaveLength(0)
    })
})
