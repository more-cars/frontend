import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/gaming-platforms/getGamingPlatformById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeGamingPlatform} from "../../../../_toolbox/fixtures/node-types/FakeGamingPlatform"
import {getConnectedRacingGames} from "../../../../../src/data/node-types/gaming-platforms/getConnectedRacingGames"

describe('Fetching connected RACING GAMES from data source', () => {
    test('when there are no RACING GAMES connected', async () => {
        const source = FakeGamingPlatform.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getGamingPlatformById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRacingGames(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple RACING GAMES connected', async () => {
        const source = FakeGamingPlatform.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getGamingPlatformById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRacingGames(12345678))
            .toHaveLength(3)
    })

    test('when the GAMING PLATFORM does not exist', async () => {
        vi.spyOn(node, 'getGamingPlatformById')
            .mockImplementation(async () => null)

        expect(await getConnectedRacingGames(12345678))
            .toHaveLength(0)
    })
})
