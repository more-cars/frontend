import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingEventById} from "../../../../../src/data/node-types/racing-events/getRacingEventById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingEventNode} from "../../../../../src/data/node-types/racing-events/types/ApiRacingEventNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {RacingEventNode} from "../../../../../src/data/node-types/racing-events/types/RacingEventNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACING EVENT node from data source', () => {
    test('when there is no RACING EVENT', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingEventById(12345678))
            .toEqual(null)
    })

    test('when there is a RACING EVENT', async () => {
        const apiResponse = {
            type: ApiNodeType.RACING_EVENT,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiRacingEventNode

        const expectedDataNode = {
            type: DataNodeType.RACING_EVENT,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as RacingEventNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingEventById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
