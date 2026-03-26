import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getProgrammeEpisodeById} from "../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching PROGRAMME EPISODE node from data source', () => {
    test('when there is no PROGRAMME EPISODE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getProgrammeEpisodeById(12345678))
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
