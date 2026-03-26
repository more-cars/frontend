import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/ratings/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {RatingHasMainImageRelationship} from "../../../../../src/data/node-types/ratings/types/RatingHasMainImageRelationship"

describe('Collect connected main IMAGE for the RATING detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(RatingDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as RatingHasMainImageRelationship

        vi.spyOn(RatingDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
