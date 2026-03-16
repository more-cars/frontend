import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching PROGRAMME EPISODE node from data source', () => {
    test('when there is no PROGRAMME EPISODE', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getProgrammeEpisodeById} = await import("../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById")
        expect(await getProgrammeEpisodeById(1))
            .toEqual(null)
    })

    test('when there is a PROGRAMME EPISODE', async () => {
        const responseData = {
            type: "programme-episodes",
            id: 1,
            attributes: {
                title: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getProgrammeEpisodeById} = await import("../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById")
        expect(await getProgrammeEpisodeById(1))
            .toEqual({id: 1, title: "dummy 1"})
    })
})
