import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import {VideoModelFacade} from "../../../../../src/models/VideoModelFacade"
import * as node from "../../../../../src/controllers/node-types/videos/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a VIDEO detail page', () => {
    test('when the VIDEO does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/video-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the VIDEO exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeVideo.model))
        vi.spyOn(VideoModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeVideo.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/video-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
