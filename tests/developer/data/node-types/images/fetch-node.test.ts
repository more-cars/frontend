import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getImageById} from "../../../../../src/data/node-types/images/getImageById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching IMAGE node from data source', () => {
    test('when there is no IMAGE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getImageById(12345678))
            .toEqual(null)
    })

    test('when there is a IMAGE', async () => {
        const responseData = {
            type: "images",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getImageById} = await import("../../../../../src/data/node-types/images/getImageById")
        expect(await getImageById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
