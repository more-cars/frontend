import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllRacingEvents} from "../../../../../src/data/node-types/racing-events/getAllRacingEvents"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingEventNode} from "../../../../../src/data/node-types/racing-events/types/ApiRacingEventNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RACING EVENT collection from data source', () => {
    test('when there are no RACING EVENTS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingEvents())
            .toHaveLength(0)
    })

    test('when there are multiple RACING EVENTS', async () => {
        const node = {type: ApiNodeType.RACING_EVENT} as ApiRacingEventNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingEvents())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingEvents())
            .toHaveLength(0)
    })
})
