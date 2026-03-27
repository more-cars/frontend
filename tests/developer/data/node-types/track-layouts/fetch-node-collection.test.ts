import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllTrackLayouts} from "../../../../../src/data/node-types/track-layouts/getAllTrackLayouts"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiTrackLayoutNode} from "../../../../../src/data/node-types/track-layouts/types/ApiTrackLayoutNode"

describe('Fetching TRACK LAYOUT collection from data source', () => {
    test('when there are no TRACK LAYOUTS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllTrackLayouts())
            .toHaveLength(0)
    })

    test('when there are multiple TRACK LAYOUTS', async () => {
        const node = {type: ApiNodeType.TRACK_LAYOUT} as ApiTrackLayoutNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllTrackLayouts())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllTrackLayouts())
            .toHaveLength(0)
    })
})
