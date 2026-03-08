import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING GAME node from data source', () => {
    test('when there is no RACING GAME', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingGameById} = await import("../../../../../src/data/node-types/racing-games/getRacingGameById")
        expect(await getRacingGameById(1))
            .toEqual(null)
    })

    test('when there is a RACING GAME', async () => {
        const responseData = {
            type: "racing-games",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingGameById} = await import("../../../../../src/data/node-types/racing-games/getRacingGameById")
        expect(await getRacingGameById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
