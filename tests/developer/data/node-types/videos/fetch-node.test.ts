import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getVideoById} from "../../../../../src/data/node-types/videos/getVideoById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiVideoNode} from "../../../../../src/data/node-types/videos/types/ApiVideoNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {VideoNode} from "../../../../../src/data/node-types/videos/types/VideoNode"

describe('Fetching VIDEO node from data source', () => {
    test('when there is no VIDEO', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getVideoById(1))
            .toEqual(null)
    })

    test('when there is a VIDEO', async () => {
        const apiResponse = {
            type: ApiNodeType.VIDEO,
            id: 12345678,
            attributes: {
                title: "dummy",
            },
        } as ApiVideoNode

        const expectedDataNode = {
            type: DataNodeType.VIDEO,
            data: {
                id: 12345678,
                title: "dummy",
            },
        } as VideoNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getVideoById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
