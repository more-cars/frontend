import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/programmes/getProgrammeById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeProgramme} from "../../../../_toolbox/fixtures/node-types/FakeProgramme"
import {getConnectedProgrammeEpisodes} from "../../../../../src/data/node-types/programmes/getConnectedProgrammeEpisodes"

describe('Fetching connected PROGRAMME EPISODES from data source', () => {
    test('when there are no PROGRAMME EPISODES connected', async () => {
        const source = FakeProgramme.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getProgrammeById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedProgrammeEpisodes(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple PROGRAMME EPISODES connected', async () => {
        const source = FakeProgramme.data
        const target = {node_type: ApiNodeType.PROGRAMME_EPISODE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getProgrammeById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedProgrammeEpisodes(12345678))
            .toHaveLength(3)
    })

    test('when the PROGRAMME does not exist', async () => {
        vi.spyOn(node, 'getProgrammeById')
            .mockImplementation(async () => null)

        expect(await getConnectedProgrammeEpisodes(12345678))
            .toHaveLength(0)
    })
})
