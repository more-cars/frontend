import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllLapTimes} from "../../../../../src/data/node-types/lap-times/getAllLapTimes"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiLapTimeNode} from "../../../../../src/data/node-types/lap-times/types/ApiLapTimeNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching LAP TIME collection from data source', () => {
    test('when there are no LAP TIMES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllLapTimes())
            .toHaveLength(0)
    })

    test('when there are multiple LAP TIMES', async () => {
        const node = {type: ApiNodeType.LAP_TIME} as ApiLapTimeNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllLapTimes())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllLapTimes())
            .toHaveLength(0)
    })
})
