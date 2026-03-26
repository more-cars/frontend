import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedModelCars} from "../../../../../src/models/node-types/car-model-variants/findConnectedModelCars"
import {CarModelVariantHasScaleModelRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantHasScaleModelRelationship"
import {FakeModelCar} from "../../../../_toolbox/fixtures/node-types/FakeModelCar"

describe('Collect connected MODEL CARS for the CAR MODEL VARIANT detail page', () => {
    test('when no MODEL CARS are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedModelCarNodes').mockResolvedValue([])

        expect(await findConnectedModelCars(12345678))
            .toHaveLength(0)
    })

    test('when there are MODEL CARS connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedModelCarNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeModelCar.data} as unknown as CarModelVariantHasScaleModelRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeModelCar.data} as unknown as CarModelVariantHasScaleModelRelationship,
        ])

        expect(await findConnectedModelCars(12345678))
            .toHaveLength(2)
    })
})
