import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllRacingSessions} from "../../../../../src/data/node-types/racing-sessions/getAllRacingSessions"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingSessionNode} from "../../../../../src/data/node-types/racing-sessions/types/ApiRacingSessionNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACING SESSION collection from data source', () => {
    test('when there are no RACING SESSIONS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingSessions())
            .toHaveLength(0)
    })

    test('when there are multiple RACING SESSIONS', async () => {
        const node = {type: ApiNodeType.RACING_SESSION} as ApiRacingSessionNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingSessions())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingSessions())
            .toHaveLength(0)
    })
})
