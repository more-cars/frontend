import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllRacingSeries} from "../../../../../src/data/node-types/racing-series/getAllRacingSeries"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRacingSeriesNode} from "../../../../../src/data/node-types/racing-series/types/ApiRacingSeriesNode"

describe('Fetching RACING SERIES collection from data source', () => {
    test('when there are no RACING SERIES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingSeries())
            .toHaveLength(0)
    })

    test('when there are multiple RACING SERIES', async () => {
        const node = {type: ApiNodeType.RACING_SERIES} as ApiRacingSeriesNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingSeries())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRacingSeries())
            .toHaveLength(0)
    })
})
