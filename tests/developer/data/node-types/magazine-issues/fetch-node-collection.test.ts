import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MAGAZINE ISSUE collection from data source', () => {
    test('when there are no MAGAZINE ISSUES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllMagazineIssues} = await import("../../../../../src/data/node-types/magazine-issues/getAllMagazineIssues")
        expect(await getAllMagazineIssues())
            .toHaveLength(0)
    })

    test('when there are multiple MAGAZINE ISSUES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllMagazineIssues} = await import("../../../../../src/data/node-types/magazine-issues/getAllMagazineIssues")
        expect(await getAllMagazineIssues())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllMagazineIssues} = await import("../../../../../src/data/node-types/magazine-issues/getAllMagazineIssues")
        expect(await getAllMagazineIssues())
            .toHaveLength(0)
    })
})
