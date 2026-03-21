import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/prices/findConnectedMainImage"
import {PriceHasMainImageRelationship} from "../../../../../src/data/node-types/prices/types/PriceHasMainImageRelationship"

describe('Collect connected main IMAGE for the PRICE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(PriceDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as PriceHasMainImageRelationship
        vi.spyOn(PriceDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
