import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../../src/data/CarModelDataFacade"
import {findConnectedCarModelVariants} from "../../../../../src/models/node-types/car-models/findConnectedCarModelVariants"
import {CarModelHasVariantRelationship} from "../../../../../src/data/node-types/car-models/types/CarModelHasVariantRelationship"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"

describe('Collect connected CAR MODEL VARIANTS for the CAR MODEL detail page', () => {
    test('when no CAR MODEL VARIANTS are connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are CAR MODEL VARIANTS connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedCarModelVariantNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeCarModelVariant.data} as unknown as CarModelHasVariantRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeCarModelVariant.data} as unknown as CarModelHasVariantRelationship,
        ])

        expect(await findConnectedCarModelVariants(12345678))
            .toHaveLength(2)
    })
})
