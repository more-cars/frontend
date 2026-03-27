import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/programme-episodes/getProgrammeEpisodeById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeProgrammeEpisode} from "../../../../_toolbox/fixtures/node-types/FakeProgrammeEpisode"
import {getConnectedCarModelVariants} from "../../../../../src/data/node-types/programme-episodes/getConnectedCarModelVariants"

describe('Fetching connected CAR MODEL VARIANTS from data source', () => {
    test('when there are no CAR MODEL VARIANTS connected', async () => {
        const source = FakeProgrammeEpisode.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODEL VARIANTS connected', async () => {
        const source = FakeProgrammeEpisode.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(3)
    })

    test('when the PROGRAMME EPISODE does not exist', async () => {
        vi.spyOn(node, 'getProgrammeEpisodeById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })
})
