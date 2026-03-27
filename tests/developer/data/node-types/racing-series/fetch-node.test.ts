import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRacingSeriesById} from "../../../../../src/data/node-types/racing-series/getRacingSeriesById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingSeriesNode} from "../../../../../src/data/node-types/racing-series/types/ApiRacingSeriesNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {RacingSeriesNode} from "../../../../../src/data/node-types/racing-series/types/RacingSeriesNode"

describe('Fetching RACING SERIES node from data source', () => {
    test('when there is no RACING SERIES', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingSeriesById(12345678))
            .toEqual(null)
    })

    test('when there is a RACING SERIES', async () => {
        const apiResponse = {
            type: ApiNodeType.RACING_SERIES,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiRacingSeriesNode

        const expectedDataNode = {
            type: DataNodeType.RACING_SERIES,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as RacingSeriesNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRacingSeriesById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
