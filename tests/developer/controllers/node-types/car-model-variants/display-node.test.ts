import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {CarModelVariantModelFacade} from "../../../../../src/models/CarModelVariantModelFacade"
import * as node from "../../../../../src/controllers/node-types/car-model-variants/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a CAR MODEL VARIANT detail page', () => {
    test('when the CAR MODEL VARIANT does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/car-model-variant-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the CAR MODEL VARIANT exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeCarModelVariant.model))
        vi.spyOn(CarModelVariantModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeCarModelVariant.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/car-model-variant-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
