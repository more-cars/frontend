import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"
import {TrackLayoutModelFacade} from "../../../../../src/models/TrackLayoutModelFacade"
import * as node from "../../../../../src/controllers/node-types/track-layouts/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a TRACK LAYOUT detail page', () => {
    test('when the TRACK LAYOUT does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/track-layout-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the TRACK LAYOUT exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeTrackLayout.model))
        vi.spyOn(TrackLayoutModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeTrackLayout.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/track-layout-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
