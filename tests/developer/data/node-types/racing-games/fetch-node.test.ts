import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingGameById} from "../../../../../src/data/node-types/racing-games/getRacingGameById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACING GAME node from data source', () => {
    test('when there is no RACING GAME', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingGameById(12345678))
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
