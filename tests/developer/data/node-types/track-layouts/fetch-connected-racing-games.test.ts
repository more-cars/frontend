import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING GAMES from data source', () => {
    test('when there are no RACING GAMES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedRacingGames} = await import("../../../../../src/data/node-types/track-layouts/getConnectedRacingGames")
        expect(await getConnectedRacingGames(1))
            .toHaveLength(0)
    })

    test('when there are multiple RACING GAMES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {partner_node: {data: {id: 1}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 3}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedRacingGames} = await import("../../../../../src/data/node-types/track-layouts/getConnectedRacingGames")
        expect(await getConnectedRacingGames(1))
            .toHaveLength(3)
    })

    test('when the TRACK LAYOUT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/track-layouts/getTrackLayoutById", () => ({
            getTrackLayoutById: vi.fn(() => null)
        }))

        const {getConnectedRacingGames} = await import("../../../../../src/data/node-types/track-layouts/getConnectedRacingGames")
        expect(await getConnectedRacingGames(1))
            .toHaveLength(0)
    })
})
