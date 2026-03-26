import {afterEach, describe, expect, test, vi} from "vitest"
import {CarModelVariantControllerFacade} from "../../../../../src/controllers/CarModelVariantControllerFacade"
import {CarModelVariantModelFacade} from "../../../../../src/models/CarModelVariantModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import type {CarModelVariant} from "../../../../../src/models/node-types/car-model-variants/types/CarModelVariant"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the CAR MODEL VARIANT overview page', () => {
    test('when there exist no CAR MODEL VARIANTS', async () => {
        const spy = vi.spyOn(CarModelVariantControllerFacade, 'showAllNodes')

        vi.spyOn(CarModelVariantModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/car-model-variants')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple CAR MODEL VARIANTS', async () => {
        const spy = vi.spyOn(CarModelVariantControllerFacade, 'showAllNodes')

        vi.spyOn(CarModelVariantModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeCarModelVariant.model,
                FakeCarModelVariant.model,
                FakeCarModelVariant.model,
            ] satisfies CarModelVariant[])

        const response = await supertestGet('/car-model-variants')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
