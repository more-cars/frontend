import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MAGAZINE ISSUE node from data source', () => {
    test('when there is no MAGAZINE ISSUE', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getMagazineIssueById} = await import("../../../../../src/data/node-types/magazine-issues/getMagazineIssueById")
        expect(await getMagazineIssueById(1))
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
