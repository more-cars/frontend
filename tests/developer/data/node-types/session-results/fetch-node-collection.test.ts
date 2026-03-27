import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllSessionResults} from "../../../../../src/data/node-types/session-results/getAllSessionResults"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiSessionResultNode} from "../../../../../src/data/node-types/session-results/types/ApiSessionResultNode"

describe('Fetching SESSION RESULT collection from data source', () => {
    test('when there are no SESSION RESULTS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllSessionResults())
            .toHaveLength(0)
    })

    test('when there are multiple SESSION RESULTS', async () => {
        const node = {type: ApiNodeType.SESSION_RESULT} as ApiSessionResultNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllSessionResults())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllSessionResults())
            .toHaveLength(0)
    })
})
