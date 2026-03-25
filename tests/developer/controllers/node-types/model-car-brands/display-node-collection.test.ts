import {afterEach, describe, expect, test, vi} from "vitest"
import {ModelCarBrandControllerFacade} from "../../../../../src/controllers/ModelCarBrandControllerFacade"
import {ModelCarBrandModelFacade} from "../../../../../src/models/ModelCarBrandModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeModelCarBrand} from "../../../../_toolbox/fixtures/node-types/FakeModelCarBrand"
import type {ModelCarBrand} from "../../../../../src/models/node-types/model-car-brands/types/ModelCarBrand"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MODEL CAR BRAND overview page', () => {
    test('when there exist no MODEL CAR BRANDS', async () => {
        const spy = vi.spyOn(ModelCarBrandControllerFacade, 'showAllNodes')

        vi.spyOn(ModelCarBrandModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/model-car-brands')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple MODEL CAR BRANDS', async () => {
        const spy = vi.spyOn(ModelCarBrandControllerFacade, 'showAllNodes')

        vi.spyOn(ModelCarBrandModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeModelCarBrand.model,
                FakeModelCarBrand.model,
                FakeModelCarBrand.model,
            ] satisfies ModelCarBrand[])

        const response = await supertestGet('/model-car-brands')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
