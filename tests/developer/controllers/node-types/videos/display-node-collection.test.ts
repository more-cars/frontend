import {afterEach, describe, expect, test, vi} from "vitest"
import {VideoControllerFacade} from "../../../../../src/controllers/VideoControllerFacade"
import {VideoModelFacade} from "../../../../../src/models/VideoModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import type {Video} from "../../../../../src/models/node-types/videos/types/Video"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the VIDEO overview page', () => {
    test('when there exist no VIDEOS', async () => {
        const spy = vi.spyOn(VideoControllerFacade, 'showAllNodes')

        vi.spyOn(VideoModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/videos')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple VIDEOS', async () => {
        const spy = vi.spyOn(VideoControllerFacade, 'showAllNodes')

        vi.spyOn(VideoModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeVideo.model,
                FakeVideo.model,
                FakeVideo.model,
            ] satisfies Video[])

        const response = await supertestGet('/videos')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
