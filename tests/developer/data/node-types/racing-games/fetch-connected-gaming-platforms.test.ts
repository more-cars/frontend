import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected GAMING PLATFORMS from data source', () => {
    test('when there are no GAMING PLATFORMS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedGamingPlatforms} = await import("../../../../../src/data/node-types/racing-games/getConnectedGamingPlatforms")
        expect(await getConnectedGamingPlatforms(1))
            .toHaveLength(0)
    })

    test('when there are multiple GAMING PLATFORMS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {partner_node: {data: {id: 1}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 3}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedGamingPlatforms} = await import("../../../../../src/data/node-types/racing-games/getConnectedGamingPlatforms")
        expect(await getConnectedGamingPlatforms(1))
            .toHaveLength(3)
    })

    test('when the RACING GAME does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/racing-games/getRacingGameById", () => ({
            getRacingGameById: vi.fn(() => null)
        }))

        const {getConnectedGamingPlatforms} = await import("../../../../../src/data/node-types/racing-games/getConnectedGamingPlatforms")
        expect(await getConnectedGamingPlatforms(1))
            .toHaveLength(0)
    })
})
