import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/model-car-brands/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {ModelCarBrandHasMainImageRelationship} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandHasMainImageRelationship"

describe('Collect connected main IMAGE for the MODEL CAR BRAND detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as ModelCarBrandHasMainImageRelationship

        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
