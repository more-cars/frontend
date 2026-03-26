import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findConnectedBrand} from "../../../../../src/models/node-types/car-models/findConnectedBrand"
import {FakeBrand} from "../../../../_toolbox/fixtures/node-types/FakeBrand"
import type {CarModelBelongsToBrandRelationship} from "../../../../../src/data/node-types/car-models/types/CarModelBelongsToBrandRelationship"

describe('Collect connected BRAND for the CAR MODEL detail page', () => {
    test('when no BRAND is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedBrandNode').mockResolvedValue(null)

        expect(await findConnectedBrand(12345678))
            .toEqual(null)
    })

    test('when there is a BRAND connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeBrand.data} as unknown as CarModelBelongsToBrandRelationship

        vi.spyOn(CarModelDataFacade, 'getConnectedBrandNode').mockResolvedValue(data)

        expect(await findConnectedBrand(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
