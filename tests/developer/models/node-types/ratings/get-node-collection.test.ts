import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/ratings/findAllNodes"
import type {RatingNode} from "../../../../../src/data/node-types/ratings/types/RatingNode"

describe('Collect node collection for the RATING overview page', () => {
    test('when there exist no RATINGS', async () => {
        vi.spyOn(RatingDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RATINGS', async () => {
        vi.spyOn(RatingDataFacade, 'getNodeCollection').mockResolvedValue([
            {id: 1, rating_value: 93} as RatingNode,
            {id: 2, rating_value: 93} as RatingNode,
            {id: 3, rating_value: 93} as RatingNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RATINGS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({id: i, rating_value: 10 + i} as RatingNode)
        }

        vi.spyOn(RatingDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
