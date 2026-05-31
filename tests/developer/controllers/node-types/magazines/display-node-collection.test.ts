import {afterEach, describe, expect, test, vi} from "vitest"
import {MagazineControllerFacade} from "../../../../../src/controllers/MagazineControllerFacade"
import {MagazineModelFacade} from "../../../../../src/models/MagazineModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeMagazine} from "../../../../_toolbox/fixtures/node-types/FakeMagazine"
import type {Magazine} from "../../../../../src/models/node-types/magazines/types/Magazine"
import * as node from "../../../../../src/controllers/lib/getNodeThumbnails"
import type {Image} from "../../../../../src/models/node-types/images/types/Image"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the MAGAZINE overview page', () => {
    test('when there exist no MAGAZINES', async () => {
        const spy = vi.spyOn(MagazineControllerFacade, 'showAllNodes')

        vi.spyOn(MagazineModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/magazines')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple MAGAZINES', async () => {
        const spy = vi.spyOn(MagazineControllerFacade, 'showAllNodes')

        vi.spyOn(MagazineModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeMagazine.model,
                FakeMagazine.model,
                FakeMagazine.model,
            ] satisfies Magazine[])

        vi.spyOn(node, 'getNodeThumbnails')
            .mockImplementation(async () => new Map<number, Image>)

        const response = await supertestGet('/magazines')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })

    test('when the search params are invalid', async () => {
        const response = await supertestGet('/magazines?sort_direction=blubb')

        expect(response.statusCode)
            .toBe(400)
    })
})
