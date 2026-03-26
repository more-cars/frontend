import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getMotorShowById} from "../../../../../src/data/node-types/motor-shows/getMotorShowById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MOTOR SHOW node from data source', () => {
    test('when there is no MOTOR SHOW', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMotorShowById(12345678))
            .toEqual(null)
    })

    test('when there is a MOTOR SHOW', async () => {
        const responseData = {
            type: "motor-shows",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getMotorShowById} = await import("../../../../../src/data/node-types/motor-shows/getMotorShowById")
        expect(await getMotorShowById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
