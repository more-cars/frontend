import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findConnectedMainImage} from "../../../../src/models/node-types/car-models/findConnectedMainImage"
import {
    CarModelHasMainImageRelationship
} from "../../../../src/data/node-types/car-models/types/CarModelHasMainImageRelationship"

describe('Collect connected main IMAGE for the CAR MODEL detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as CarModelHasMainImageRelationship
        vi.spyOn(CarModelDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
