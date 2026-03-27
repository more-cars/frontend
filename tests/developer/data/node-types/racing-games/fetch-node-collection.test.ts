import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllRacingGames} from "../../../../../src/data/node-types/racing-games/getAllRacingGames"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingGameNode} from "../../../../../src/data/node-types/racing-games/types/ApiRacingGameNode"

describe('Fetching RACING GAME collection from data source', () => {
    test('when there are no RACING GAMES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingGames())
            .toHaveLength(0)
    })

    test('when there are multiple RACING GAMES', async () => {
        const node = {type: ApiNodeType.RACING_GAME} as ApiRacingGameNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingGames())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingGames())
            .toHaveLength(0)
    })
})
