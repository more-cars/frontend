import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeBrand} from "../../../../_toolbox/fixtures/node-types/FakeBrand"
import {BrandModelFacade} from "../../../../../src/models/BrandModelFacade"
import * as node from "../../../../../src/controllers/node-types/brands/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a BRAND detail page', () => {
    test('when the BRAND does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/brand-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when the BRAND exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeBrand.model))
        vi.spyOn(BrandModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeBrand.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/brand-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
