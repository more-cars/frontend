import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getTrackLayoutById} from "../../../../../src/data/node-types/track-layouts/getTrackLayoutById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching TRACK LAYOUT node from data source', () => {
    test('when there is no TRACK LAYOUT', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getTrackLayoutById(12345678))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT', async () => {
        const responseData = {
            type: "track-layouts",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getTrackLayoutById} = await import("../../../../../src/data/node-types/track-layouts/getTrackLayoutById")
        expect(await getTrackLayoutById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
