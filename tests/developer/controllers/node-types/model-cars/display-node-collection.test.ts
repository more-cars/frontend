import {afterEach, describe, expect, test, vi} from "vitest"
import {ModelCarControllerFacade} from "../../../../../src/controllers/ModelCarControllerFacade"
import {ModelCarModelFacade} from "../../../../../src/models/ModelCarModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeModelCar} from "../../../../_toolbox/fixtures/node-types/FakeModelCar"
import type {ModelCar} from "../../../../../src/models/node-types/model-cars/types/ModelCar"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the MODEL CAR overview page', () => {
    test('when there exist no MODEL CARS', async () => {
        const spy = vi.spyOn(ModelCarControllerFacade, 'showAllNodes')

        vi.spyOn(ModelCarModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/model-cars')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple MODEL CARS', async () => {
        const spy = vi.spyOn(ModelCarControllerFacade, 'showAllNodes')

        vi.spyOn(ModelCarModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeModelCar.model,
                FakeModelCar.model,
                FakeModelCar.model,
            ] satisfies ModelCar[])

        const response = await supertestGet('/model-cars')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
