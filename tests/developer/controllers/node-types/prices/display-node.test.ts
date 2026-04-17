import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakePrice} from "../../../../_toolbox/fixtures/node-types/FakePrice"
import {PriceModelFacade} from "../../../../../src/models/PriceModelFacade"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import * as node from "../../../../../src/controllers/node-types/prices/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a PRICE detail page', () => {
    test('when the PRICE does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/price-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the PRICE exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakePrice.model))
        vi.spyOn(PriceModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakePrice.model))
        vi.spyOn(PriceModelFacade, 'getConnectedCarModelVariant')
            .mockImplementation(async () => (FakeCarModelVariant.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/price-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
