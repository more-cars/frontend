import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingEventById} from "../../../../../src/data/node-types/racing-events/getRacingEventById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACING EVENT node from data source', () => {
    test('when there is no RACING EVENT', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingEventById(12345678))
            .toEqual(null)
    })

    test('when there is a RACING EVENT', async () => {
        const responseData = {
            type: "racing-events",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingEventById} = await import("../../../../../src/data/node-types/racing-events/getRacingEventById")
        expect(await getRacingEventById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
