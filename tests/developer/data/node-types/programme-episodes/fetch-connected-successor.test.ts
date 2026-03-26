import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"
import {getConnectedSuccessor} from "../../../../../src/data/node-types/programme-episodes/getConnectedSuccessor"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected SUCCESSOR from data source', () => {
    test('when there is no SUCCESSOR connected', async () => {
        const source = FakeProgrammeEpisode.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedSuccessor(12345678))
            .toEqual(null)
    })

    test('when there is a SUCCESSOR connected', async () => {
        const source = FakeProgrammeEpisode.data
        const target = {node_type: ApiNodeType.PROGRAMME_EPISODE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedSuccessor(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the SUCCESSOR does not exist', async () => {
        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => null)

        expect(await getConnectedSuccessor(12345678))
            .toEqual(null)
    })
})
