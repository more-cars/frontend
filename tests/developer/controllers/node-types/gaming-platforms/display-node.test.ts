import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeGamingPlatform} from "../../../../_toolbox/fixtures/node-types/FakeGamingPlatform"
import {GamingPlatformModelFacade} from "../../../../../src/models/GamingPlatformModelFacade"
import * as node from "../../../../../src/controllers/node-types/gaming-platforms/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a GAMING PLATFORM detail page', () => {
    test('when the GAMING PLATFORM does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/gaming-platform-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the GAMING PLATFORM exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeGamingPlatform.model))
        vi.spyOn(GamingPlatformModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeGamingPlatform.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/gaming-platform-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
