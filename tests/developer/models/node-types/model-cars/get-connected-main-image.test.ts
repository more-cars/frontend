import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/model-cars/findConnectedMainImage"
import {ModelCarHasMainImageRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarHasMainImageRelationship"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"

describe('Collect connected main IMAGE for the MODEL CAR detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as ModelCarHasMainImageRelationship

        vi.spyOn(ModelCarDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
