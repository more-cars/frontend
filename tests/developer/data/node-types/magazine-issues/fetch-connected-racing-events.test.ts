import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING EVENTS from data source', () => {
    test('when there are no RACING EVENTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedRacingEvents} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedRacingEvents")
        expect(await getConnectedRacingEvents(1))
            .toHaveLength(0)
    })

    test('when there are multiple RACING EVENTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {partner_node: {data: {id: 1}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 3}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedRacingEvents} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedRacingEvents")
        expect(await getConnectedRacingEvents(1))
            .toHaveLength(3)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/magazine-issues/getMagazineIssueById", () => ({
            getMagazineIssueById: vi.fn(() => null)
        }))

        const {getConnectedRacingEvents} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedRacingEvents")
        expect(await getConnectedRacingEvents(1))
            .toHaveLength(0)
    })
})
