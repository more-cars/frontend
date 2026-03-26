import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getLapTimeById} from "../../../../../src/data/node-types/lap-times/getLapTimeById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching LAP TIME node from data source', () => {
    test('when there is no LAP TIME', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getLapTimeById(12345678))
            .toEqual(null)
    })

    test('when there is a LAP TIME', async () => {
        const responseData = {
            type: "lap-times",
            id: 1,
            attributes: {
                driver_name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getLapTimeById} = await import("../../../../../src/data/node-types/lap-times/getLapTimeById")
        expect(await getLapTimeById(1))
            .toEqual({id: 1, driver_name: "dummy 1"})
    })
})
