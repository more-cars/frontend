import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/model-car-brands/findConnectedMainImage"
import {ModelCarBrandHasMainImageRelationship} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the MODEL CAR BRAND detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as ModelCarBrandHasMainImageRelationship
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
