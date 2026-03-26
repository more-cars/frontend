import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllGamingPlatforms} from "../../../../../src/data/node-types/gaming-platforms/getAllGamingPlatforms"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiGamingPlatformNode} from "../../../../../src/data/node-types/gaming-platforms/types/ApiGamingPlatformNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching GAMING PLATFORM collection from data source', () => {
    test('when there are no GAMING PLATFORMS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllGamingPlatforms())
            .toHaveLength(0)
    })

    test('when there are multiple GAMING PLATFORMS', async () => {
        const node = {type: ApiNodeType.GAMING_PLATFORM} as ApiGamingPlatformNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllGamingPlatforms())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllGamingPlatforms())
            .toHaveLength(0)
    })
})
