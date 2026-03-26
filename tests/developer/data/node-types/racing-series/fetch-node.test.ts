import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingSeriesById} from "../../../../../src/data/node-types/racing-series/getRacingSeriesById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACING SERIES node from data source', () => {
    test('when there is no RACING SERIES', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingSeriesById(12345678))
            .toEqual(null)
    })

    test('when there is a RACING SERIES', async () => {
        const responseData = {
            type: "racing-series",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingSeriesById} = await import("../../../../../src/data/node-types/racing-series/getRacingSeriesById")
        expect(await getRacingSeriesById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
