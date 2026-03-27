import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingGameById} from "../../../../../src/data/node-types/racing-games/getRacingGameById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingGameNode} from "../../../../../src/data/node-types/racing-games/types/ApiRacingGameNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {RacingGameNode} from "../../../../../src/data/node-types/racing-games/types/RacingGameNode"

describe('Fetching RACING GAME node from data source', () => {
    test('when there is no RACING GAME', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingGameById(12345678))
            .toEqual(null)
    })

    test('when there is a RACING GAME', async () => {
        const apiResponse = {
            type: ApiNodeType.RACING_GAME,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiRacingGameNode

        const expectedDataNode = {
            type: DataNodeType.RACING_GAME,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as RacingGameNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingGameById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
