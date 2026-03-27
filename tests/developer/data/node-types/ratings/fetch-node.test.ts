import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getRatingById} from "../../../../../src/data/node-types/ratings/getRatingById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiRatingNode} from "../../../../../src/data/node-types/ratings/types/ApiRatingNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {RatingNode} from "../../../../../src/data/node-types/ratings/types/RatingNode"

describe('Fetching RATING node from data source', () => {
    test('when there is no RATING', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRatingById(12345678))
            .toEqual(null)
    })

    test('when there is a RATING', async () => {
        const apiResponse = {
            type: ApiNodeType.RATING,
            id: 12345678,
            attributes: {
                rating_value: 93,
            },
        } as ApiRatingNode

        const expectedDataNode = {
            type: DataNodeType.RATING,
            data: {
                id: 12345678,
                rating_value: 93,
            },
        } as RatingNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getRatingById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
