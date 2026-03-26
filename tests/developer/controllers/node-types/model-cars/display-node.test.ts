import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeModelCar} from "../../../../_toolbox/fixtures/node-types/FakeModelCar"
import {ModelCarModelFacade} from "../../../../../src/models/ModelCarModelFacade"
import * as node from "../../../../../src/controllers/node-types/model-cars/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a MODEL CAR detail page', () => {
    test('when the MODEL CAR does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/model-car-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the MODEL CAR exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeModelCar.model))
        vi.spyOn(ModelCarModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeModelCar.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/model-car-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
