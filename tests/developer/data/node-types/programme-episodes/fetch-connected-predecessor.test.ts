import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected PROGRAMME EPISODE from data source', () => {
    test('when there is no PROGRAMME EPISODE connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById", () => ({
            getProgrammeEpisodeById: vi.fn(() => ({
                title: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/programme-episodes/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a PROGRAMME EPISODE connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/programme-episodes/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the PROGRAMME EPISODE does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById", () => ({
            getProgrammeEpisodeById: vi.fn(() => null)
        }))

        const {getConnectedPredecessor} = await import("../../../../../src/data/node-types/programme-episodes/getConnectedPredecessor")
        expect(await getConnectedPredecessor(1))
            .toEqual(null)
    })
})
