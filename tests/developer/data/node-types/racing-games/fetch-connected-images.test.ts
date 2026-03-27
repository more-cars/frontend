import {describe, expect, test, vi} from "vitest"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import * as node from "../../../../../src/data/node-types/racing-games/getRacingGameById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedImages} from "../../../../../src/data/node-types/racing-games/getConnectedImages"
import {FakeRacingGame} from "../../../../_toolbox/fixtures/node-types/FakeRacingGame"

describe('Fetching connected IMAGES from data source', () => {
    test('when there are no IMAGES connected', async () => {
        const source = FakeRacingGame.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getRacingGameById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple IMAGES connected', async () => {
        const source = FakeRacingGame.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getRacingGameById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedImages(12345678))
            .toHaveLength(3)
    })

    test('when the RACING GAME does not exist', async () => {
        vi.spyOn(node, 'getRacingGameById')
            .mockImplementation(async () => null)

        expect(await getConnectedImages(12345678))
            .toHaveLength(0)
    })
})
