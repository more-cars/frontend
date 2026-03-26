import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import {CarModelModelFacade} from "../../../../../src/models/CarModelModelFacade"
import * as node from "../../../../../src/controllers/node-types/car-models/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a CAR MODEL detail page', () => {
    test('when the CAR MODEL does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/car-model-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the CAR MODEL exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeCarModel.model))
        vi.spyOn(CarModelModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeCarModel.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/car-model-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
