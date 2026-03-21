import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedModelCarBrand} from "../../../../../src/models/node-types/model-cars/findConnectedModelCarBrand"
import {ModelCarMadeByModelCarBrandRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarMadeByModelCarBrandRelationship"

describe('Collect connected MODEL CAR BRAND for the MODEL CAR detail page', () => {
    test('when no MODEL CAR BRAND is connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedModelCarBrandNode').mockResolvedValue(null)

        expect(await findConnectedModelCarBrand(1))
            .toEqual(null)
    })

    test('when there is a MODEL CAR BRAND connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as ModelCarMadeByModelCarBrandRelationship
        vi.spyOn(ModelCarDataFacade, 'getConnectedModelCarBrandNode').mockResolvedValue(data)

        expect(await findConnectedModelCarBrand(1))
            .toHaveProperty('id', 1)
    })
})
