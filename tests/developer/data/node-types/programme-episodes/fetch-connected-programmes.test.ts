import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected PROGRAMME from data source', () => {
    test('when there is no PROGRAMME connected', async () => {
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

        const {getConnectedProgramme} = await import("../../../../../src/data/node-types/programme-episodes/getConnectedProgramme")
        expect(await getConnectedProgramme(1))
            .toEqual(null)
    })

    test('when there is a PROGRAMME connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedProgramme} = await import("../../../../../src/data/node-types/programme-episodes/getConnectedProgramme")
        expect(await getConnectedProgramme(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the PROGRAMME EPISODE does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById", () => ({
            getProgrammeEpisodeById: vi.fn(() => null)
        }))

        const {getConnectedProgramme} = await import("../../../../../src/data/node-types/programme-episodes/getConnectedProgramme")
        expect(await getConnectedProgramme(1))
            .toEqual(null)
    })
})
