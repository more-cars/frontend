import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getProgrammeEpisodeById} from "../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiProgrammeEpisodeNode} from "../../../../../src/data/node-types/programme-episodes/types/ApiProgrammeEpisodeNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {ProgrammeEpisodeNode} from "../../../../../src/data/node-types/programme-episodes/types/ProgrammeEpisodeNode"

describe('Fetching PROGRAMME EPISODE node from data source', () => {
    test('when there is no PROGRAMME EPISODE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getProgrammeEpisodeById(12345678))
            .toEqual(null)
    })

    test('when there is a PROGRAMME EPISODE', async () => {
        const apiResponse = {
            type: ApiNodeType.PROGRAMME_EPISODE,
            id: 12345678,
            attributes: {
                title: "dummy",
            },
        } as ApiProgrammeEpisodeNode

        const expectedDataNode = {
            type: DataNodeType.PROGRAMME_EPISODE,
            data: {
                id: 12345678,
                title: "dummy",
            },
        } as ProgrammeEpisodeNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getProgrammeEpisodeById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
