import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeModelCarBrand} from "../../../../_toolbox/fixtures/node-types/FakeModelCarBrand"
import {ModelCarBrandModelFacade} from "../../../../../src/models/ModelCarBrandModelFacade"
import * as node from "../../../../../src/controllers/node-types/model-car-brands/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a MODEL CAR BRAND detail page', () => {
    test('when the MODEL CAR BRAND does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/model-car-brand-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the MODEL CAR BRAND exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeModelCarBrand.model))
        vi.spyOn(ModelCarBrandModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeModelCarBrand.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/model-car-brand-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
