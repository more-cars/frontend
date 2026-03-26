import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRaceTrackById} from "../../../../../src/data/node-types/race-tracks/getRaceTrackById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRaceTrackNode} from "../../../../../src/data/node-types/race-tracks/types/ApiRaceTrackNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {RaceTrackNode} from "../../../../../src/data/node-types/race-tracks/types/RaceTrackNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACE TRACK node from data source', () => {
    test('when there is no RACE TRACK', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRaceTrackById(12345678))
            .toEqual(null)
    })

    test('when there is a RACE TRACK', async () => {
        const apiResponse = {
            type: ApiNodeType.RACE_TRACK,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiRaceTrackNode

        const expectedDataNode = {
            type: DataNodeType.RACE_TRACK,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as RaceTrackNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRaceTrackById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
