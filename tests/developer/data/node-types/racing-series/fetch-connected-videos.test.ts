import {describe, expect, test, vi} from "vitest"
import {FakeRacingSeries} from "../../../../_toolbox/fixtures/node-types/FakeRacingSeries"
import * as node from "../../../../../src/data/node-types/racing-series/getRacingSeriesById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedVideos} from "../../../../../src/data/node-types/racing-series/getConnectedVideos"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected VIDEOS from data source', () => {
    test('when there are no VIDEOS connected', async () => {
        const source = FakeRacingSeries.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getRacingSeriesById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple VIDEOS connected', async () => {
        const source = FakeRacingSeries.data
        const target = {node_type: ApiNodeType.VIDEO}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getRacingSeriesById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(3)
    })

    test('when the RACING SERIES does not exist', async () => {
        vi.spyOn(node, 'getRacingSeriesById')
            .mockImplementation(async () => null)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })
})
