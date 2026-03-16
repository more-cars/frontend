import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching PROGRAMME EPISODE collection from data source', () => {
    test('when there are no PROGRAMME EPISODES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllProgrammeEpisodes} = await import("../../../../../src/data/node-types/programme-episodes/getAllProgrammeEpisodes")
        expect(await getAllProgrammeEpisodes())
            .toHaveLength(0)
    })

    test('when there are multiple PROGRAMME EPISODES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllProgrammeEpisodes} = await import("../../../../../src/data/node-types/programme-episodes/getAllProgrammeEpisodes")
        expect(await getAllProgrammeEpisodes())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllProgrammeEpisodes} = await import("../../../../../src/data/node-types/programme-episodes/getAllProgrammeEpisodes")
        expect(await getAllProgrammeEpisodes())
            .toHaveLength(0)
    })
})
