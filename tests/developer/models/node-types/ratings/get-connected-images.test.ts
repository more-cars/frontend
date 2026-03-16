import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/ratings/findConnectedImages"
import {RatingHasImageRelationship} from "../../../../../src/data/node-types/ratings/types/RatingHasImageRelationship"

describe('Collect connected IMAGES for the RATING detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(RatingDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(RatingDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RatingHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RatingHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
