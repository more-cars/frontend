import {afterEach, describe, expect, test, vi} from "vitest"
import {ImageControllerFacade} from "../../../../../src/controllers/ImageControllerFacade"
import {ImageModelFacade} from "../../../../../src/models/ImageModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the IMAGE overview page', () => {
    test('when there exist no IMAGES', async () => {
        const spy = vi.spyOn(ImageControllerFacade, 'showAllNodes')

        vi.spyOn(ImageModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/images')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple IMAGES', async () => {
        const spy = vi.spyOn(ImageControllerFacade, 'showAllNodes')

        vi.spyOn(ImageModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeImage.model,
                FakeImage.model,
                FakeImage.model,
            ] satisfies Image[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/images')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
