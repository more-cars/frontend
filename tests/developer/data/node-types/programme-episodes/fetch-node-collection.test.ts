import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllProgrammeEpisodes} from "../../../../../src/data/node-types/programme-episodes/getAllProgrammeEpisodes"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiProgrammeEpisodeNode} from "../../../../../src/data/node-types/programme-episodes/types/ApiProgrammeEpisodeNode"

describe('Fetching PROGRAMME EPISODE collection from data source', () => {
    test('when there are no PROGRAMME EPISODES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllProgrammeEpisodes())
            .toHaveLength(0)
    })

    test('when there are multiple PROGRAMME EPISODES', async () => {
        const node = {type: ApiNodeType.PROGRAMME_EPISODE} as ApiProgrammeEpisodeNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllProgrammeEpisodes())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllProgrammeEpisodes())
            .toHaveLength(0)
    })
})
