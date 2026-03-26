import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingSessionById} from "../../../../../src/data/node-types/racing-sessions/getRacingSessionById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACING SESSION node from data source', () => {
    test('when there is no RACING SESSION', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingSessionById(12345678))
            .toEqual(null)
    })

    test('when there is a RACING SESSION', async () => {
        const responseData = {
            type: "racing-sessions",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingSessionById} = await import("../../../../../src/data/node-types/racing-sessions/getRacingSessionById")
        expect(await getRacingSessionById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
