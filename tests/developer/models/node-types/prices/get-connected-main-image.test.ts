import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/prices/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {PriceHasMainImageRelationship} from "../../../../../src/data/node-types/prices/types/PriceHasMainImageRelationship"

describe('Collect connected main IMAGE for the PRICE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(PriceDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as PriceHasMainImageRelationship

        vi.spyOn(PriceDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
