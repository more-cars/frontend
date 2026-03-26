import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getSessionResultById} from "../../../../../src/data/node-types/session-results/getSessionResultById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching SESSION RESULT node from data source', () => {
    test('when there is no SESSION RESULT', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getSessionResultById(12345678))
            .toEqual(null)
    })

    test('when there is a SESSION RESULT', async () => {
        const responseData = {
            type: "session-results",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getSessionResultById} = await import("../../../../../src/data/node-types/session-results/getSessionResultById")
        expect(await getSessionResultById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
