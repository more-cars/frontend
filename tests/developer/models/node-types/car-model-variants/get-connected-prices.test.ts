import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedPrices} from "../../../../../src/models/node-types/car-model-variants/findConnectedPrices"
import {CarModelVariantHasPriceRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantHasPriceRelationship"

describe('Collect connected PRICES for the CAR MODEL VARIANT detail page', () => {
    test('when no PRICES are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedPriceNodes').mockResolvedValue([])

        expect(await findConnectedPrices(1))
            .toHaveLength(0)
    })

    test('when there are PRICES connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedPriceNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as CarModelVariantHasPriceRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as CarModelVariantHasPriceRelationship,
        ])

        expect(await findConnectedPrices(1))
            .toHaveLength(2)
    })
})
