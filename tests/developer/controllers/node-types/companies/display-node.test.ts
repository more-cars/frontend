import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeCompany} from "../../../../_toolbox/fixtures/node-types/FakeCompany"
import {CompanyModelFacade} from "../../../../../src/models/CompanyModelFacade"
import * as node from "../../../../../src/controllers/node-types/companies/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a COMPANY detail page', () => {
    test('when the COMPANY does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/company-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the COMPANY exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeCompany.model))
        vi.spyOn(CompanyModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeCompany.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/company-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
