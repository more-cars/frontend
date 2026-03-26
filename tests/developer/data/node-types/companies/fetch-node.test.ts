import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getCompanyById} from "../../../../../src/data/node-types/companies/getCompanyById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching COMPANY node from data source', () => {
    test('when there is no COMPANY', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCompanyById(12345678))
            .toEqual(null)
    })

    test('when there is a COMPANY', async () => {
        const responseData = {
            type: "companies",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getCompanyById} = await import("../../../../../src/data/node-types/companies/getCompanyById")
        expect(await getCompanyById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
