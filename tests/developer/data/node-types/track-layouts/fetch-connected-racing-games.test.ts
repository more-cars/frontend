import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/track-layouts/getTrackLayoutById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {getConnectedRacingGames} from "../../../../../src/data/node-types/track-layouts/getConnectedRacingGames"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"

describe('Fetching connected RACING GAMES from data source', () => {
    test('when there are no RACING GAMES connected', async () => {
        const source = FakeTrackLayout.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRacingGames(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple RACING GAMES connected', async () => {
        const source = FakeTrackLayout.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRacingGames(12345678))
            .toHaveLength(3)
    })

    test('when the TRACK LAYOUT does not exist', async () => {
        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => null)

        expect(await getConnectedRacingGames(12345678))
            .toHaveLength(0)
    })
})
