import {afterEach, describe, expect, test, vi} from "vitest"
import {CarModelControllerFacade} from "../../../../../src/controllers/CarModelControllerFacade"
import {CarModelModelFacade} from "../../../../../src/models/CarModelModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import type {CarModel} from "../../../../../src/models/node-types/car-models/types/CarModel"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the CAR MODEL overview page', () => {
    test('when there exist no CAR MODELS', async () => {
        const spy = vi.spyOn(CarModelControllerFacade, 'showAllNodes')

        vi.spyOn(CarModelModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/car-models')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple CAR MODELS', async () => {
        const spy = vi.spyOn(CarModelControllerFacade, 'showAllNodes')

        vi.spyOn(CarModelModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeCarModel.model,
                FakeCarModel.model,
                FakeCarModel.model,
            ] satisfies CarModel[])

        const response = await supertestGet('/car-models')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
