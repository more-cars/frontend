import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {ImageModelFacade} from "../../../../../src/models/ImageModelFacade"
import * as node from "../../../../../src/controllers/node-types/images/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a IMAGE detail page', () => {
    test('when the IMAGE does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/image-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the IMAGE exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeImage.model))
        vi.spyOn(ImageModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeImage.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/image-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
