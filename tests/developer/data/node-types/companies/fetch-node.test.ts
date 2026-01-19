import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching COMPANY node from data source', () => {
    test('when there is no COMPANY', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getCompanyById} = await import("../../../../../src/data/node-types/companies/getCompanyById")
        expect(await getCompanyById(1))
            .toEqual(null)
    })

    test('when there is a COMPANY', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getCompanyById} = await import("../../../../../src/data/node-types/companies/getCompanyById")
        expect(await getCompanyById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
