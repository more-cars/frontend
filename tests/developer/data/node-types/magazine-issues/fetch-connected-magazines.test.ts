import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected MAGAZINE from data source', () => {
    test('when there is no MAGAZINE connected', async () => {
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

        const {getConnectedMagazine} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedMagazine")
        expect(await getConnectedMagazine(1))
            .toEqual(null)
    })

    test('when there is a MAGAZINE connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedMagazine} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedMagazine")
        expect(await getConnectedMagazine(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the MAGAZINE ISSUE does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/magazine-issues/getMagazineIssueById", () => ({
            getMagazineIssueById: vi.fn(() => null)
        }))

        const {getConnectedMagazine} = await import("../../../../../src/data/node-types/magazine-issues/getConnectedMagazine")
        expect(await getConnectedMagazine(1))
            .toEqual(null)
    })
})
