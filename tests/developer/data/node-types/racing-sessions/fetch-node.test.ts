import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingSessionById} from "../../../../../src/data/node-types/racing-sessions/getRacingSessionById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingSessionNode} from "../../../../../src/data/node-types/racing-sessions/types/ApiRacingSessionNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {RacingSessionNode} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionNode"

describe('Fetching RACING SESSION node from data source', () => {
    test('when there is no RACING SESSION', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingSessionById(12345678))
            .toEqual(null)
    })

    test('when there is a RACING SESSION', async () => {
        const apiResponse = {
            type: ApiNodeType.RACING_SESSION,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiRacingSessionNode

        const expectedDataNode = {
            type: DataNodeType.RACING_SESSION,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as RacingSessionNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingSessionById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
