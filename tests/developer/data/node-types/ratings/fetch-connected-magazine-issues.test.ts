import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected MAGAZINE ISSUE from data source', () => {
    test('when there is no MAGAZINE ISSUE connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/ratings/getRatingById", () => ({
            getRatingById: vi.fn(() => ({
                rating_value: 93
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedMagazineIssue} = await import("../../../../../src/data/node-types/ratings/getConnectedMagazineIssue")
        expect(await getConnectedMagazineIssue(1))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedMagazineIssue} = await import("../../../../../src/data/node-types/ratings/getConnectedMagazineIssue")
        expect(await getConnectedMagazineIssue(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the RATING does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/ratings/getRatingById", () => ({
            getRatingById: vi.fn(() => null)
        }))

        const {getConnectedMagazineIssue} = await import("../../../../../src/data/node-types/ratings/getConnectedMagazineIssue")
        expect(await getConnectedMagazineIssue(1))
            .toEqual(null)
    })
})
