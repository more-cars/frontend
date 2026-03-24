import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/ratings/findConnectedMainImage"
import {RatingHasMainImageRelationship} from "../../../../../src/data/node-types/ratings/types/RatingHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the RATING detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RatingDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as RatingHasMainImageRelationship
        vi.spyOn(RatingDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
