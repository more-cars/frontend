import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllVideos} from "../../../../../src/data/node-types/videos/getAllVideos"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiVideoNode} from "../../../../../src/data/node-types/videos/types/ApiVideoNode"

describe('Fetching VIDEO collection from data source', () => {
    test('when there are no VIDEOS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllVideos())
            .toHaveLength(0)
    })

    test('when there are multiple VIDEOS', async () => {
        const node = {type: ApiNodeType.VIDEO} as ApiVideoNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllVideos())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllVideos())
            .toHaveLength(0)
    })
})
