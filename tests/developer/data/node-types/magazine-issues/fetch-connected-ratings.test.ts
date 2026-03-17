import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RATINGS from data source', () => {
    test('when there are no RATINGS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedRatings} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedRatings")
        expect(await getConnectedRatings(1))
            .toHaveLength(0)
    })

    test('when there are multiple RATINGS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {partner_node: {data: {id: 1}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 3}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedRatings} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedRatings")
        expect(await getConnectedRatings(1))
            .toHaveLength(3)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/magazine-issues/getMagazineIssueById", () => ({
            getMagazineIssueById: vi.fn(() => null)
        }))

        const {getConnectedRatings} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedRatings")
        expect(await getConnectedRatings(1))
            .toHaveLength(0)
    })
})
