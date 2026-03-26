import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findAllNodes} from "../../../../../src/models/node-types/ratings/findAllNodes"
import type {RatingNode} from "../../../../../src/data/node-types/ratings/types/RatingNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect node collection for the RATING overview page', () => {
    test('when there exist no RATINGS', async () => {
        vi.spyOn(RatingDataFacade, 'getNodeCollection').mockResolvedValue([])

        expect(await findAllNodes())
            .toHaveLength(0)
    })

    test('when there exist multiple RATINGS', async () => {
        vi.spyOn(RatingDataFacade, 'getNodeCollection').mockResolvedValue([
            {type: DataNodeType.RATING, data: {id: 11111118, rating_value: 93}} as RatingNode,
            {type: DataNodeType.RATING, data: {id: 12222228, rating_value: 93}} as RatingNode,
            {type: DataNodeType.RATING, data: {id: 13333338, rating_value: 93}} as RatingNode,
        ])

        expect(await findAllNodes())
            .toHaveLength(3)
    })

    test('when there exist more than 100 RATINGS', async () => {
        const dummyNodes = []

        for (let i = 0; i < 110; i++) {
            dummyNodes.push({type: DataNodeType.RATING, data: {id: i, rating_value: 10 + i}} as RatingNode)
        }

        vi.spyOn(RatingDataFacade, 'getNodeCollection')
            .mockResolvedValue(dummyNodes)

        expect(await findAllNodes())
            .toHaveLength(100)
    })
})
