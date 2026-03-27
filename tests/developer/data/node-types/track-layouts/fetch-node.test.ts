import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getTrackLayoutById} from "../../../../../src/data/node-types/track-layouts/getTrackLayoutById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiTrackLayoutNode} from "../../../../../src/data/node-types/track-layouts/types/ApiTrackLayoutNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {TrackLayoutNode} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutNode"

describe('Fetching TRACK LAYOUT node from data source', () => {
    test('when there is no TRACK LAYOUT', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getTrackLayoutById(12345678))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT', async () => {
        const apiResponse = {
            type: ApiNodeType.TRACK_LAYOUT,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiTrackLayoutNode

        const expectedDataNode = {
            type: DataNodeType.TRACK_LAYOUT,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as TrackLayoutNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getTrackLayoutById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
