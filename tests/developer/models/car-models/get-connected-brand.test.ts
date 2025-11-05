import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findConnectedBrand} from "../../../../src/models/node-types/car-models/findConnectedBrand"
import type {
    CarModelBelongsToBrandRelationship
} from "../../../../src/data/node-types/car-models/types/CarModelBelongsToBrandRelationship"

describe('Collect connected BRAND for the CAR MODEL detail page', () => {
    test.skip('when no BRAND is connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedBrandNode').mockResolvedValue(null)

        expect(await findConnectedBrand(1))
            .toEqual(null)
    })

    test('when there is a BRAND connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as CarModelBelongsToBrandRelationship
        vi.spyOn(CarModelDataFacade, 'getConnectedBrandNode').mockResolvedValue(data)

        expect(await findConnectedBrand(1))
            .toHaveProperty('id', 1)
    })
})
