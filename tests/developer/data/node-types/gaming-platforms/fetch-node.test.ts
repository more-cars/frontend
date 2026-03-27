import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getGamingPlatformById} from "../../../../../src/data/node-types/gaming-platforms/getGamingPlatformById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiGamingPlatformNode} from "../../../../../src/data/node-types/gaming-platforms/types/ApiGamingPlatformNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {GamingPlatformNode} from "../../../../../src/data/node-types/gaming-platforms/types/GamingPlatformNode"

describe('Fetching GAMING PLATFORM node from data source', () => {
    test('when there is no GAMING PLATFORM', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getGamingPlatformById(12345678))
            .toEqual(null)
    })

    test('when there is a GAMING PLATFORM', async () => {
        const apiResponse = {
            type: ApiNodeType.GAMING_PLATFORM,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiGamingPlatformNode

        const expectedDataNode = {
            type: DataNodeType.GAMING_PLATFORM,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as GamingPlatformNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getGamingPlatformById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
