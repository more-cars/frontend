import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/model-cars/findConnectedMainImage"
import {ModelCarHasMainImageRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the MODEL CAR detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as ModelCarHasMainImageRelationship
        vi.spyOn(ModelCarDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
