import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected MAGAZINE ISSUE from data source', () => {
    test('when there is no MAGAZINE ISSUE connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/magazine-issues/getMagazineIssueById", () => ({
            getMagazineIssueById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/magazine-issues/getMagazineIssueById", () => ({
            getMagazineIssueById: vi.fn(() => null)
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toEqual(null)
    })
})
