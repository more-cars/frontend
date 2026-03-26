import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedModelCarBrand} from "../../../../../src/models/node-types/model-cars/findConnectedModelCarBrand"
import {FakeModelCarBrand} from "../../../../_toolbox/fixtures/node-types/FakeModelCarBrand"
import {ModelCarMadeByModelCarBrandRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarMadeByModelCarBrandRelationship"

describe('Collect connected MODEL CAR BRAND for the MODEL CAR detail page', () => {
    test('when no MODEL CAR BRAND is connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedModelCarBrandNode').mockResolvedValue(null)

        expect(await findConnectedModelCarBrand(12345678))
            .toEqual(null)
    })

    test('when there is a MODEL CAR BRAND connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeModelCarBrand.data} as unknown as ModelCarMadeByModelCarBrandRelationship

        vi.spyOn(ModelCarDataFacade, 'getConnectedModelCarBrandNode').mockResolvedValue(data)

        expect(await findConnectedModelCarBrand(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
