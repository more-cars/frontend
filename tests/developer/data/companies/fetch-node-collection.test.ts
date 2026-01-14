import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching COMPANY collection from data source', () => {
    test('when there are no COMPANIES', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllCompanies} = await import("../../../../src/data/node-types/companies/getAllCompanies")
        expect(await getAllCompanies())
            .toHaveLength(0)
    })

    test('when there are multiple COMPANIES', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllCompanies} = await import("../../../../src/data/node-types/companies/getAllCompanies")
        expect(await getAllCompanies())
            .toHaveLength(3)
    })
})
