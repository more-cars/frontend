import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected MAGAZINE ISSUES from data source', () => {
    test('when there are no MAGAZINE ISSUES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedMagazineIssues} = await import("../../../../../src/data/node-types/racing-events/getConnectedMagazineIssues")
        expect(await getConnectedMagazineIssues(1))
            .toHaveLength(0)
    })

    test('when there are multiple MAGAZINE ISSUES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {partner_node: {data: {id: 1}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 3}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedMagazineIssues} = await import("../../../../../src/data/node-types/racing-events/getConnectedMagazineIssues")
        expect(await getConnectedMagazineIssues(1))
            .toHaveLength(3)
    })

    test('when the RACING EVENT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/racing-events/getRacingEventById", () => ({
            getRacingEventById: vi.fn(() => null)
        }))

        const {getConnectedMagazineIssues} = await import("../../../../../src/data/node-types/racing-events/getConnectedMagazineIssues")
        expect(await getConnectedMagazineIssues(1))
            .toHaveLength(0)
    })
})
