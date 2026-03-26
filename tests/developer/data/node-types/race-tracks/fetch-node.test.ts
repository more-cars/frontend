import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRaceTrackById} from "../../../../../src/data/node-types/race-tracks/getRaceTrackById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACE TRACK node from data source', () => {
    test('when there is no RACE TRACK', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRaceTrackById(12345678))
            .toEqual(null)
    })

    test('when there is a RACE TRACK', async () => {
        const responseData = {
            type: "race-tracks",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRaceTrackById} = await import("../../../../../src/data/node-types/race-tracks/getRaceTrackById")
        expect(await getRaceTrackById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
