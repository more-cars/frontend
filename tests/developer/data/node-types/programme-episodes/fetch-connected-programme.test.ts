import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"
import {getConnectedProgramme} from "../../../../../src/data/node-types/programme-episodes/getConnectedProgramme"

describe('Fetching connected PROGRAMME from data source', () => {
    test('when there is no PROGRAMME connected', async () => {
        const source = FakeProgrammeEpisode.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedProgramme(12345678))
            .toEqual(null)
    })

    test('when there is a PROGRAMME connected', async () => {
        const source = FakeProgrammeEpisode.data
        const target = {node_type: ApiNodeType.PROGRAMME, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedProgramme(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the PROGRAMME EPISODE does not exist', async () => {
        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => null)

        expect(await getConnectedProgramme(12345678))
            .toEqual(null)
    })
})
