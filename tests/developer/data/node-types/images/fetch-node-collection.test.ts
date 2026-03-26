import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllImages} from "../../../../../src/data/node-types/images/getAllImages"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiImageNode} from "../../../../../src/data/node-types/images/types/ApiImageNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching IMAGE collection from data source', () => {
    test('when there are no IMAGES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllImages())
            .toHaveLength(0)
    })

    test('when there are multiple IMAGES', async () => {
        const node = {type: ApiNodeType.IMAGE} as ApiImageNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllImages())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllImages())
            .toHaveLength(0)
    })
})
