import {afterEach, describe, expect, test, vi} from "vitest"
import {TrackLayoutControllerFacade} from "../../../../../src/controllers/TrackLayoutControllerFacade"
import {TrackLayoutModelFacade} from "../../../../../src/models/TrackLayoutModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"
import type {TrackLayout} from "../../../../../src/models/node-types/track-layouts/types/TrackLayout"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the TRACK LAYOUT overview page', () => {
    test('when there exist no TRACK LAYOUTS', async () => {
        const spy = vi.spyOn(TrackLayoutControllerFacade, 'showAllNodes')

        vi.spyOn(TrackLayoutModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/track-layouts')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple TRACK LAYOUTS', async () => {
        const spy = vi.spyOn(TrackLayoutControllerFacade, 'showAllNodes')

        vi.spyOn(TrackLayoutModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeTrackLayout.model,
                FakeTrackLayout.model,
                FakeTrackLayout.model,
            ] satisfies TrackLayout[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/track-layouts')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when the search params are invalid', async () => {
        const response = await supertestGet('/track-layouts?sort_direction=blubb')

        expect(response.statusCode)
            .toBe(400)
    })
})
