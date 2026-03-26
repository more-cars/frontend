import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllRatings} from "../../../../../src/data/node-types/ratings/getAllRatings"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRatingNode} from "../../../../../src/data/node-types/ratings/types/ApiRatingNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching RATING collection from data source', () => {
    test('when there are no RATINGS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRatings())
            .toHaveLength(0)
    })

    test('when there are multiple RATINGS', async () => {
        const node = {type: ApiNodeType.RATING} as ApiRatingNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRatings())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllRatings())
            .toHaveLength(0)
    })
})
