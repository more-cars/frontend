import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeMagazine} from "../../../../_toolbox/fixtures/node-types/FakeMagazine"
import {MagazineModelFacade} from "../../../../../src/models/MagazineModelFacade"
import * as node from "../../../../../src/controllers/node-types/magazines/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a MAGAZINE detail page', () => {
    test('when the MAGAZINE does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/magazine-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the MAGAZINE exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeMagazine.model))
        vi.spyOn(MagazineModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeMagazine.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/magazine-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
