import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findNodeById} from "../../../../../src/models/node-types/ratings/findNodeById"
import type {RatingNode} from "../../../../../src/data/node-types/ratings/types/RatingNode"

describe('Collect node for the RATING detail page', () => {
    test('when the RATING does not exist', async () => {
        vi.spyOn(RatingDataFacade, 'getNodeById').mockResolvedValue(null)

        expect(await findNodeById(1))
            .toEqual(null)
    })

    test('when the RATING exists', async () => {
        const node = {id: 1, rating_value: 93} as RatingNode
        vi.spyOn(RatingDataFacade, 'getNodeById').mockResolvedValue(node)

        const rating = await findNodeById(1)

        expect(rating?.id).toEqual(node.id)
        expect(rating?.rating_value).toEqual(node.rating_value)
    })
})
