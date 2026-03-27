import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllRaceTracks} from "../../../../../src/data/node-types/race-tracks/getAllRaceTracks"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRaceTrackNode} from "../../../../../src/data/node-types/race-tracks/types/ApiRaceTrackNode"

describe('Fetching RACE TRACK collection from data source', () => {
    test('when there are no RACE TRACKS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRaceTracks())
            .toHaveLength(0)
    })

    test('when there are multiple RACE TRACKS', async () => {
        const node = {type: ApiNodeType.RACE_TRACK} as ApiRaceTrackNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRaceTracks())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRaceTracks())
            .toHaveLength(0)
    })
})
