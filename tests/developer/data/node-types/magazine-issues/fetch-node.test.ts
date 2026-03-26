import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getMagazineIssueById} from "../../../../../src/data/node-types/magazine-issues/getMagazineIssueById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MAGAZINE ISSUE node from data source', () => {
    test('when there is no MAGAZINE ISSUE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMagazineIssueById(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE', async () => {
        const responseData = {
            type: "magazine-issues",
            id: 1,
            attributes: {
                title: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getMagazineIssueById} = await import("../../../../../src/data/node-types/magazine-issues/getMagazineIssueById")
        expect(await getMagazineIssueById(1))
            .toEqual({id: 1, title: "dummy 1"})
    })
})
