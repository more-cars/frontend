import {afterEach, describe, expect, test, vi} from "vitest"
import {BrandControllerFacade} from "../../../../../src/controllers/BrandControllerFacade"
import {BrandModelFacade} from "../../../../../src/models/BrandModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeBrand} from "../../../../_toolbox/fixtures/node-types/FakeBrand"
import type {Brand} from "../../../../../src/models/node-types/brands/types/Brand"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the BRAND overview page', () => {
    test('when there exist no BRANDS', async () => {
        const spy = vi.spyOn(BrandControllerFacade, 'showAllNodes')

        vi.spyOn(BrandModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/brands')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple BRANDS', async () => {
        const spy = vi.spyOn(BrandControllerFacade, 'showAllNodes')

        vi.spyOn(BrandModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeBrand.model,
                FakeBrand.model,
                FakeBrand.model,
            ] satisfies Brand[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/brands')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
